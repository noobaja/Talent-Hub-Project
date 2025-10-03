# TalentHub - Platform Marketplace Talenta

![TalentHub Screenshot](https://via.placeholder.com/800x400.png?text=Screenshot+Aplikasi+Anda)

Platform marketplace untuk menghubungkan perusahaan dengan talenta-talenta terbaik di bidang teknologi dan kreatif di Indonesia. Proyek ini dibangun dengan arsitektur modern menggunakan Django untuk backend dan React untuk frontend.

---

## ✨ Fitur Utama
-   **Pencarian Talenta:** Perusahaan dapat mencari dan memfilter talenta berdasarkan keahlian.
-   **Profil & Portofolio:** Setiap talenta memiliki halaman profil publik untuk memamerkan bio, keahlian, dan portofolio karya.
-   **Manajemen Akun:** Sistem registrasi dan login yang aman untuk para talenta.
-   **Dashboard Pengguna:** Area pribadi bagi talenta untuk mengedit profil dan mengelola portofolio mereka.
-   **API Terstruktur:** Backend menyediakan RESTful API yang aman dan efisien.

---

## 🚀 Tumpukan Teknologi (Tech Stack)

### Backend
-   **Python**
-   **Django** & **Django REST Framework**
-   **dj-rest-auth** & **django-allauth** untuk autentikasi
-   **MySQL / MariaDB**

### Frontend
-   **React.js** (dengan Vite)
-   **React Router** untuk navigasi
-   **Tailwind CSS** untuk styling
-   **Axios** untuk permintaan API
-   **React Context** untuk state management

---

## ⚙️ Instalasi & Cara Menjalankan (Lokal)

Pastikan Anda sudah menginstal Python, Node.js, dan server MySQL (misalnya dari XAMPP).

### 1. Backend Setup
```bash
# Clone repository
git clone [https://github.com/USERNAME/REPO_ANDA.git](https://github.com/USERNAME/REPO_ANDA.git)
cd REPO_ANDA/backend

# Buat dan aktifkan virtual environment
python -m venv venv
.\venv\Scripts\activate

# Install dependensi
pip install -r requirements.txt

# Siapkan database & .env file (sesuai panduan sebelumnya)

# Jalankan migrasi
python manage.py migrate

# Buat superuser
python manage.py createsuperuser
```

### 2. Frontend Setup
```bash
# Dari direktori utama, masuk ke folder frontend
cd ../frontend

# Install dependensi
npm install
```

### 3. Menjalankan Aplikasi
Anda membutuhkan **dua terminal** yang berjalan bersamaan.

**Terminal 1 (Backend):**
```bash
cd backend
.\venv\Scripts\activate
python manage.py runserver
```

**Terminal 2 (Frontend):**
```bash
cd frontend
npm run dev
```
Buka `http://localhost:5173` di browser Anda.