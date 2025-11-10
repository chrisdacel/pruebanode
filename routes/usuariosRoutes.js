import express from "express";
import { formularioLogin, formularioOlvidePassword, formularioRegistro, registrar, confirmar, resertPassword, comprobarToken, nuevoPassword, autenticar} from "../controllers/usuariosController.js"
const  router = express.Router();

// Login
router.get('/login', formularioLogin);
router.post('/login', autenticar);

// Registro
router.get('/register', formularioRegistro);
router.post('/register', registrar);

router.get('/confirmar/:token', confirmar);

// Olvide Password
router.get('/olvide-password', formularioOlvidePassword);
router.post('/olvide-password', resertPassword);

// Validacion contraseña
router.get('/olvide-password/:token', comprobarToken);
router.post('/olvide-password/:token', nuevoPassword);


export default router;