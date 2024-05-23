import Sequelize  from "sequelize";
import dotenv from 'dotenv'
dotenv.config({path: '.env'});


const db = new Sequelize(
    process.env.BD_NOMBRE,
    process.env.BD_USER,
    process.env.BD_PASS ?? '',
    {
     host: process.env.BD_HOST,
     port: 3306,
     dialect: 'mysql',
        define: {
        timestamp: true,
     },
     //configuración del pool de conexiones a la base de datos para evitar la sobrecarga de la base de datos
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        operatorAliases: false
    }
);

export default db;