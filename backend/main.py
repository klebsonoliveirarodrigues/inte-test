from fastapi import FastAPI
from pymongo import MongoClient
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Configuração de CORS (permite requisições do frontend)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Conexão com o MongoDB
client = MongoClient("mongodb://localhost:27017/")
db = client["inte"]
collection = db["sites"]

# Modelo para validar os dados recebidos
class SiteData(BaseModel):
    title: str
    content: str

# Rota para salvar os dados do site
@app.post("/save-site")
async def save_site(data: SiteData):
    result = collection.insert_one(data.dict())
    return {"message": "Site saved successfully", "id": str(result.inserted_id)}

# Rota de teste
@app.get("/")
def read_root():
    return {"message": "Backend do Inte está rodando!"}