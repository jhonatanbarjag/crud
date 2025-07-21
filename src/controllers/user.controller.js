import { pool } from "../db.js";  // Importamos el pool de conexiones a la base de datos

export const getUsers = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM users"); // Realizamos una consulta a la tabla users
        res.json(result.rows); // Enviamos los resultados como respuesta en formato JSON
    } catch (error) {
        console.error("Error al obtener usuarios:", error);
        res.status(500).json({ error: "Error al obtener usuarios" }); // Enviamos un error si ocurre algún problema
    }
}
export const getUserById = async (req, res) => {
    const { id } = req.params; // Obtenemos el ID del usuario desde los parámetros de la solicitud
    try {
        const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]); // Buscamos el usuario por ID
        if (result.rows.length > 0) {
            res.json(result.rows[0]); // Enviamos el usuario encontrado como respuesta
        } else {
            res.status(404).json({ error: "Usuario no encontrado" }); // Enviamos un error si el usuario no existe
        }
    } catch (error) {
        console.error("Error al obtener usuario:", error);
        res.status(500).json({ error: "Error al obtener usuario" }); // Enviamos un error si ocurre algún problema
    }
}



export const createUser = async (req, res) => {
    const { name, email } = req.body; // Obtenemos los datos del usuario desde el cuerpo de la solicitud
    try {
        const result = await pool.query("INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *", [name, email]); // Insertamos el nuevo usuario en la base de datos
        res.status(201).json(result.rows[0]); // Enviamos el usuario creado como respuesta
    } catch (error) {
        console.error("Error al crear usuario:", error);
        res.status(500).json({ error: "Error al crear usuario" }); // Enviamos un error si ocurre algún problema
    }
}
export const updateUser = async (req, res) => {
    const { id } = req.params; // Obtenemos el ID del usuario desde los parámetros de la solicitud
    const { name, email } = req.body; // Obtenemos los nuevos datos del usuario desde el cuerpo de la solicitud
    try {
        const result = await pool.query("UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *", [name, email, id]); // Actualizamos el usuario en la base de datos
        if (result.rows.length > 0) {
            res.json(result.rows[0]); // Enviamos el usuario actualizado como respuesta
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
        const result = await pool.query("DELETE FROM users WHERE id = $1 RETURNING *", [id]); // Eliminamos el usuario de la base de datos
        if (result.rows.length > 0) {
            res.json({ message: "Usuario eliminado" }); // Enviamos un mensaje de éxito si el usuario fue eliminado
        } else {
            res.status(404).json({ error: "Usuario no encontrado" }); // Enviamos un error si el usuario no existe
        }
    } catch (error) {
        console.error("Error al eliminar usuario:", error);
        res.status(500).json({ error: "Error al eliminar usuario" }); // Enviamos un error si ocurre algún problema
    }
}

