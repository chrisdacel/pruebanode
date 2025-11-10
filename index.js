// const express = require('express');
import express from "express";
import csurf from "csurf";
import cookieParser from "cookie-parser";
import usuariosRoutes from "./routes/usuariosRoutes.js"
import db from './config/db.js'


// Crear APP
const app = express();

// Habilitar lectura de los forms
app.use(express.urlencoded({ extended: true }));

// Habilitar el Cookie Parser
app.use(cookieParser());

// Habiliar el CSRF
app.use(csurf({ cookie: true }));

// Conexion a la db
try{
    await db.authenticate();
    db.sync();
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