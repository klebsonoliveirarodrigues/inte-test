from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

router = APIRouter()

# Modelo Pydantic para validação de dados
class Site(BaseModel):
    name: str
    template: str
    description: str

# Simulação de um banco de dados em memória
fake_db = {}

# Rota para criar um novo site
@router.post("/sites", status_code=201)
def create_site(site: Site):
    site_id = len(fake_db) + 1
    fake_db[site_id] = site.dict()
    return {"site_id": site_id, **site.dict()}

# Rota para recuperar informações de um site
@router.get("/sites/{site_id}")
def get_site(site_id: int):
    site = fake_db.get(site_id)
    if not site:
        raise HTTPException(status_code=404, detail="Site não encontrado")
    return site