# 🏉 API de Equipos de Rugby Femenino en España

Este proyecto consiste en una API RESTful para gestionar equipos, jugadoras y ligas de rugby femenino en España. La API permite obtener información sobre estos elementos, así como añadir y modificar datos.

## 📌 Tecnologías utilizadas
- **Backend:** Node.js, Express, MySQL
- **Frontend:** React, Vite
- **Base de datos:** MySQL

## 🚀 Instalación y ejecución

### 🔹 Requisitos previos
- Tener instalado **Node.js** (versión recomendada: 18+)
- Tener una instancia de **MySQL** en ejecución
- Tener **Vite** instalado si quieres ejecutar el frontend

### 🔹 Pasos para ejecutar el proyecto

1️⃣ **Clonar el repositorio**
```sh
git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_PROYECTO>

2️⃣ **Instalar dependencias**
```sh
npm install

3️⃣ **Configurar variables de entorno**
Crea un archivo .env en la raíz del proyecto con los siguientes valores:
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_USER=tu_usuario
MYSQL_PASS=tu_contraseña
MYSQL_SCHEMA=nombre_de_tu_base_de_datos