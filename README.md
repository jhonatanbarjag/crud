🧠 API REST - CRUD de Usuarios con Node.js, Express y PostgreSQL
Este es un proyecto práctico de una API RESTful que realiza operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre una base de datos PostgreSQL. Está desarrollado usando Node.js, Express, y el módulo pg. Sirve como práctica para entender cómo funciona el backend, las rutas, controladores, middlewares, consultas SQL y la conexión a una base de datos.

🚀 Tecnologías y herramientas utilizadas
Tecnología	Descripción
Node.js	Entorno de ejecución JavaScript
Express.js	Framework web para Node.js
PostgreSQL	Base de datos relacional
pg	Cliente de PostgreSQL para Node.js
DBeaver	Cliente visual para administrar bases de datos
Render	Servicio en la nube donde se aloja la base de datos
nodemon	Recarga automática del servidor en desarrollo
morgan	Middleware para registrar peticiones HTTP
Postman	(Externo) Para probar la API REST
📁 Estructura del proyecto
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
