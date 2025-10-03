# settings/base.py

INSTALLED_APPS = [
    # ... apps lain
    'corsheaders',  # Tambahkan ini
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',  # Tambahkan ini di paling atas
    'django.middleware.security.SecurityMiddleware',
    # ... middleware lain
]

# Izinkan frontend Anda untuk mengakses backend
CORS_ALLOWED_ORIGINS = [
    "http://localhost:5173",
    "http://192.168.2.252:5173", # Ganti dengan IP dan port frontend Anda
]