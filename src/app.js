import express from 'express'; // Importamos express para crear el servidor
import { connectDB } from './config/db.js'; // Importamos la función para conectar a la base de datos
import userRoutes from './routes/user.route.js'; // Importamos las rutas de usuarios
import morgan from 'morgan'; // Importamos morgan para el logging de peticiones


const app = express(); // Creamos una instancia de express

// es un middleware que permite recibir datos en formato JSON
// y los convierte en un objeto de JavaScript accesible a través de req.body
app.use(express.json());

// Usamos morgan para registrar las peticiones HTTP en la consola
app.use(morgan('dev'));




const port = 3002; // Definimos el puerto en el que el servidor escuchará las peticiones


// Conectamos a la base de datos
connectDB();

//app.use(userRoutes); //sin prefijo, las rutas de usuarios estarán disponibles directamente en la raíz del servidor

// Usamos las rutas de usuarios
app.use('/api', userRoutes); // Todas las rutas de usuarios estarán bajo el prefijo


// Definimos una ruta de prueba para verificar que el servidor está funcionando
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
