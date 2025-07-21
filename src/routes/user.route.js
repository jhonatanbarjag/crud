import { Router } from "express"; // Importamos Router de express para definir rutas
import { getUsers, createUser ,updateUser, deleteUser, getUserById } from "../controllers/user.controller.js"; // Importamos el controlador de usuarios

const router = Router(); // Creamos una instancia del router


router.get("/users", getUsers); // Definimos la ruta para obtener usuarios, que llama al controlador getUsers
router.get("/users/:id", getUserById); // Definimos la ruta para obtener un usuario por ID, que llama al controlador getUserById
router.post("/users", createUser); // Definimos la ruta para crear un usuario, que llama al controlador createUser
router.patch("/users/:id", updateUser); // Definimos la ruta para actualizar un usuario, que llama al controlador updateUser
router.delete("/users/:id", deleteUser); // Definimos la ruta para eliminar un usuario, que llama al controlador deleteUser


// si tiene el prefijo /api, las rutas serán accesibles a través de http://localhost:3002/api/users, http://localhost:3002/api/users/:id, etc.
// si no tiene el prefijo, las rutas serán accesibles a través de http://localhost:3002/users, http://localhost:3002/users/:id, etc.
//y si tiene el prefijo /api/users, los endpoints serían "/", "/:id", etc.


export default router;
