import pg from "pg";

const { Pool } = pg;

export const pool = new Pool({
    host:"dpg-d1um8tc9c44c73d538cg-a.oregon-postgres.render.com",
    port:"5432",
    user:"crud_l7tt_user",
    password:"dEN5y9vr2TvuiBRSDxNSxAQ468vgAI2S",
    database:"crud_l7tt",
    ssl: true,
})

//validar si la conexión es exitosa
export async function connectDB() {
    try {
        await pool.connect();
        console.log("Conexión exitosa a la base de datos");
    } catch (error) {
        console.error("Error al conectar a la base de datos", error);
    }
}
