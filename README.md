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
```

2️⃣ **Instalar dependencias**
```sh
npm install
```

3️⃣ **Configurar variables de entorno**  
Crea un archivo `.env` en la raíz del proyecto con los siguientes valores:
```ini
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_USER=tu_usuario
MYSQL_PASS=tu_contraseña
MYSQL_SCHEMA=nombre_de_tu_base_de_datos
```

4️⃣ **Ejecutar el backend**
```sh
npm run dev
```
La API se ejecutará en `http://localhost:3000`

5️⃣ **Ejecutar el frontend**
```sh
cd frontend
npm install
npm run dev
```
La aplicación frontend estará disponible en `http://localhost:5173`

---

## 📡 Endpoints de la API

### 🔹 Equipos
| Método | Endpoint                  | Descripción               |
|--------|----------------------------|---------------------------|
| GET    | `/rugby-femenino/teams`    | Obtiene todos los equipos |
| GET    | `/rugby-femenino/teams/:id` | Obtiene un equipo por ID  |

---

### 🔹 Jugadoras
| Método | Endpoint                    | Descripción                |
|--------|------------------------------|----------------------------|
| GET    | `/rugby-femenino/players`    | Obtiene todas las jugadoras |
| POST   | `/rugby-femenino/players`    | Añade una nueva jugadora   |
| PUT    | `/rugby-femenino/players/:id` | Actualiza datos de una jugadora |
| DELETE | `/rugby-femenino/players/:id` | Elimina una jugadora       |

---

### 🔹 Usuarios
Actualmente sigue en mantenimiento. Puedes subir una jugadora gracias a un POST en `/api/register`, pero aún no hemos podido habilitar el poder hacerlo desde el propio frontend (react).

---

## 🛠 Posibles mejoras
- Implementar autenticación con JWT y terminar el poder gestionarlo y subirlo a la api desde el propio front.
- Una vez el usuario esté registrado, poder hacer login y acceder a una nueva sección de la web exclusiva para usuarios registrados.
- Añadir paginación en los endpoints.
- Crear un panel de administración para gestionar datos.

---

Ha sido todo un reto comenzar a trabajar con un back.
¡Gracias por usar esta API! 🚀🏉

Autora: Marta Chacartegui (martaxxa).
