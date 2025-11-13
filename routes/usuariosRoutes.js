import express from "express";
import {
    formularioLogin,
    autenticar,
    formularioRegistro, 
    registrar, 
    confirmar, 
    formularioOlvidePassword, 
    resertPassword, 
    comprobarToken, 
    nuevoPassword, 
} from "../controllers/usuariosController.js"

const  router = express.Router();

// Login
router.get('/login', formularioLogin);
router.post('/login', autenticar);

// Registro
router.get('/register', formularioRegistro);
router.post('/register', registrar);

// Confirmar Cuenta
router.get('/confirmar/:token', confirmar);

// Olvide Password
router.get('/olvide-password', formularioOlvidePassword);
router.post('/olvide-password', resertPassword);

// Validacion contraseña (Olvide Password)
router.get('/olvide-password/:token', comprobarToken);
router.post('/olvide-password/:token', nuevoPassword);


export default router;