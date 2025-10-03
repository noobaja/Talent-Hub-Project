from fastapi import APIRouter
from typing import List
from app.api.v1 import schemas

router = APIRouter()

# Data dummy (nantinya bisa dari database)
projects_db = [
    {"id": 1, "title": "Sistem Inventaris", "description": "Aplikasi pelacak stok barang.", "technologies": ["Python", "FastAPI"]},
    {"id": 2, "title": "Website Portofolio", "description": "Website ini dibuat dengan React & FastAPI.", "technologies": ["React", "JavaScript", "FastAPI"]}
]

@router.get("/projects", response_model=List[schemas.Project])
def read_projects():
    return projects_db