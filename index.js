//Importar express
import express from 'express';
import usuariosRoutes from './routes/usuariosRoutes.js';
import db from './config/db.js';

//Crear la app
const app = express();

//Conectar a la base de datos
try{
 await db.authenticate();
 console.log('Conexion correcta');
}catch(error){
    console.log(error);
}


//Habilitar Pug
app.set('view engine', 'pug');
app.set('views', './views');

//Carpeta Pública
//Aqui  se almacenan los archivos estáticosvv
app.use(express.static('public'));

//Routing
/*
Use es un método que se utiliza para especificar una función de middleware.
*/
app.use('/auth', usuariosRoutes);

//Definir un puerto y arrancar el servidor
const port = 3000;
app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
});