from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.v1.endpoints import projects

app = FastAPI(title="Portfolio API")


origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

# Konfigurasi CORS agar bisa diakses oleh React
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins, # Alamat default Vite/React
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Menggabungkan router dari 'projects.py' dengan prefix /api/v1
app.include_router(projects.router, prefix="/api/v1")

@app.get("/")
def read_root():
    return {"message": "API is running"}