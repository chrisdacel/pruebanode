// const express = require('express');
import express from "express";
import usuariosRoutes from "./routes/usuariosRoutes.js"

// Crear APP
const app = express();

// Habilitar pub
app.set('view engine', 'pug');
app.set('views', './views' );

// Routing
app.use('/auth', usuariosRoutes);

// Definir el puerto
const port = 3000;

app.listen(port, () => {
    console.log('El servidor esta corriendo ' + port);
})