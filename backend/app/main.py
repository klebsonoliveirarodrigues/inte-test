from sqlalchemy import text
from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from app.routers import sites
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy.exc import SQLAlchemyError

# Inicializa o FastAPI
app = FastAPI()

# Configuração de CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configuração do banco de dados PostgreSQL
DATABASE_URL = "postgresql://postgres:klebsondbv@localhost/inte"
try:
    engine = create_engine(DATABASE_URL)
    SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
    Base = declarative_base()
except SQLAlchemyError as e:
    print(f"Erro ao conectar ao banco de dados: {e}")

# Função de dependência para obter uma sessão do banco de dados
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Rota de teste
@app.get("/")
def read_root():
    return {"message": "Bem-vindo ao backend do Inte!"}

# Rota para testar a conexão com o banco de dados
    
@app.get("/db-test")
def db_test(db=Depends(get_db)):
    try:
        db.execute(text("SELECT 1"))  # Altere para usar text()
        return {"message": "Conexão com o banco de dados PostgreSQL funcionando!"}
    except Exception as e:
        return {"error": str(e)}

# Inclui o roteador de sites
app.include_router(sites.router, prefix="/api")