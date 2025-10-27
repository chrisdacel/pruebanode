// const express = require('express');
import express from "express";
import usuariosRoutes from "./routes/usuariosRoutes.js"
import db from './config/db.js'

// Crear APP
const app = express();

// Conexion a la db
try{
    await db.authenticate();
    console.log('La conexion es correcta')
} catch(error) {
    console.error('El error de conexion es ' + error)
}

// Habilitar pub
app.set('view engine', 'pug');
app.set('views', './views' );


// Definir la ruta del Public
app.use(express.static('public'))


// Routing
app.use('/auth', usuariosRoutes);

// Definir el puerto
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('El servidor esta corriendo ' + port);
})