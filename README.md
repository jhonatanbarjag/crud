# 🧠 API REST - CRUD de Usuarios con Node.js, Express y PostgreSQL

Este proyecto es una práctica personal donde desarrollé una API RESTful que realiza operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre una base de datos PostgreSQL. Utilicé tecnologías modernas y buenas prácticas para organizar el backend de forma profesional.

---

## 🚀 Tecnologías utilizadas

- **Node.js** – Entorno de ejecución de JavaScript en backend
- **Express.js** – Framework minimalista para construir APIs
- **PostgreSQL** – Base de datos relacional
- **pg** – Cliente oficial de PostgreSQL para Node.js
- **DBeaver** – Cliente visual para administrar la base de datos
- **Render** – Servicio donde alojé la base de datos remotamente
- **Nodemon** – Reinicio automático del servidor en desarrollo
- **Morgan** – Middleware para mostrar logs de peticiones
- **Postman** – Herramienta para probar los endpoints
- **dotenv** – (opcional) Para manejar variables de entorno de forma segura

---

## 📁 Estructura del proyecto


/src
│
├── controllers/ # Lógica de negocio
│ └── users.controller.js
│
├── routes/ # Definición de rutas
│ └── users.routes.js
│
├── config/ # Configuración de la base de datos
│ └── db.js
│
├── app.js # Configuración principal de Express
└── server.js # Punto de entrada del servidor

## 🛠 Funcionalidad implementada

✅ Se implementó un CRUD completo (Create, Read, Update, Delete) sobre la entidad `users`, permitiendo:

- Crear nuevos usuarios mediante `POST /users`
- Obtener todos los usuarios con `GET /users`
- Obtener un solo usuario por ID con `GET /users/:id`
- Actualizar parcialmente un usuario con `PATCH /users/:id`
- Eliminar un usuario con `DELETE /users/:id`

Este CRUD está construido como una **API REST** modular y organizada, con separación de controladores, rutas y configuración de base de datos.


npm run dev # Ejecuta el servidor en modo desarrollo con nodemon npm start # Ejecuta el servidor en modo producción (sin nodemon)

✅ Estado del proyecto 🔧 Proyecto completo y funcional para practicar API REST con Node.js y PostgreSQL.


📌 Notas finales Este proyecto no incluye vistas: es solo backend.

Fue probado con Postman.
