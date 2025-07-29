import { obtenerTodo, obtenerPorId, crearUsuario, actualizarUsuario, eliminarUsuario } from '../model/user.model.js'; // Importamos las funciones del modelo de usuario

export const getUsers = async (req, res) => {
    try {
        const users = await obtenerTodo(); // Obtenemos todos los usuarios de la base de datos
        res.json( users); // Enviamos los usuarios como respuesta
    } catch (error) {
        console.error("Error al obtener usuarios:", error); // Registramos el error en la consola
        // Enviamos un error al cliente si ocurre algún problema
        res.status(500).json({ error: "Error al obtener usuarios" }); // Enviamos un error si ocurre algún problema
    }
}
export const getUserById = async (req, res) => {
    const { id } = req.params; // Obtenemos el ID del usuario desde los parámetros de la solicitud
    try {
        const user = await obtenerPorId(id); // Obtenemos el usuario por ID de la base de datos
        if (user) {
            res.status(200).json({message : "Usuario encontrado", user}); // Enviamos el usuario encontrado como respuesta
        } else {
            res.status(404).json({ error: "Usuario no encontrado" }); // Enviamos un error si el usuario no existe
        }
    } catch (error) {
        console.error("Error al obtener usuario:", error); // Registramos el error en la consola
        // Enviamos un error al cliente si ocurre algún problema
        res.status(500).json({ error: "Error al obtener usuario" }); // Enviamos un error si ocurre algún problema
    }
}

export const createUser = async (req, res) => {
    const { name, email } = req.body; // Obtenemos los datos del usuario desde el cuerpo de la solicitud
    try {
        const newUser = await crearUsuario(name, email); // Creamos el usuario en la base de datos
        res.status(201).json({message : "Usuario creado",newUser}); // Enviamos el usuario creado como respuesta
        // Enviamos un mensaje de éxito y el usuario creado
    } catch (error) {
        console.error("Error al crear usuario:", error);
        res.status(500).json({ error: "Error al crear usuario" }); // Enviamos un error si ocurre algún problema
    }
}
export const updateUser = async (req, res) => {
    const { id } = req.params; // Obtenemos el ID del usuario desde los parámetros de la solicitud
    const { name, email } = req.body; // Obtenemos los datos actualizados del usuario desde el cuerpo de la solicitud
    try {
        const updatedUser = await actualizarUsuario(id, name, email); // Actualizamos el usuario en la base de datos
        // Verificamos si se actualizó algún usuario
        if (updatedUser) {
            res.json({message : "Usuario actualizado", updatedUser}); // Enviamos el usuario actualizado como respuesta
        } else {
            res.status(404).json({ error: "Usuario no encontrado" }); // Enviamos un error si el usuario no existe
        }
    } catch (error) {
        console.error("Error al actualizar usuario:", error);
        res.status(500).json({ error: "Error al actualizar usuario" }); // Enviamos un error si ocurre algún problema
    }
}
export const deleteUser = async (req, res) => {
    const { id } = req.params; // Obtenemos el ID del usuario desde los parámetros de la solicitud
    try {
        const deletedUser = await eliminarUsuario(id); // Eliminamos el usuario de la base de datos
        if (deletedUser) {
            res.json({message : "Usuario eliminado", deletedUser}); // Enviamos el usuario eliminado como respuesta
        } else {
            res.status(404).json({ error: "Usuario no encontrado" }); // Enviamos un error si el usuario no existe
        }
    } catch (error) {
        console.error("Error al eliminar usuario:", error);
        res.status(500).json({ error: "Error al eliminar usuario" }); // Enviamos un error si ocurre algún problema
    }
}

