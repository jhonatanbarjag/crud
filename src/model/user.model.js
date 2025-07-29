import {pool} from '../config/db.js'; // Importamos el pool de conexiones a la base de datos

export const obtenerTodo = async () => {
    const result = await pool.query("SELECT * FROM users"); // Realizamos una consulta a la tabla users
    return result.rows; // Retornamos los resultados
}
export const obtenerPorId = async (id) => {
    const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]); // Realizamos una consulta para obtener un usuario por su ID
    // Verificamos si se encontró algún usuario
    return result.rows.length > 0 ? result.rows[0] : null; // Retorna el usuario o null si no existe
}
export const crearUsuario = async (name, email) => {
    const result = await pool.query("INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *", [name, email]); // Insertamos un nuevo usuario y retornamos el usuario creado
    return result.rows[0]; // Retorna el usuario creado
}
export const actualizarUsuario = async (id, name, email) => {
    const result = await pool.query("UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *", [name, email, id]); // Actualizamos un usuario y retornamos el usuario actualizado
    // Verificamos si se actualizó algún usuario
    if (result.rowCount === 0) { 
        return null; // No se encontró el usuario
    }
    return result.rows[0]; // Retorna el usuario actualizado
}
export const eliminarUsuario = async (id) => {
    const result = await pool.query("DELETE FROM users WHERE id = $1 RETURNING *", [id]); // Eliminamos un usuario y retornamos el usuario eliminado
    // Verificamos si se eliminó algún usuario
    if (result.rowCount === 0) {
        return null; // No se encontró el usuario
    }
    return result.rows[0]; // Retorna el usuario eliminado
}

