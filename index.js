//Importar express
import express from 'express';
import usuariosRoutes from './routes/usuariosRoutes.js';

//Crear la app
const app = express();

//Routing
/*
Use es un método que se utiliza para especificar una función de middleware.
*/
app.use('/auth', usuariosRoutes);

//Habilitar Pug
app.set('view engine', 'pug');
app.set('views', './views');

//Carpeta Pública
//Aqui  se almacenan los archivos estáticosvv
app.use(express.static('public'));

//Definir un puerto y arrancar el servidor
const port = 3000;
app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
});