import express from "express";
import { formularioLogin, formularioOlvidePassword, formularioRegistro, registrar, confirmar} from "../controllers/usuariosController.js"
const  router = express.Router();

router.get('/login', formularioLogin);
router.get('/register', formularioRegistro);
router.post('/register', registrar);
router.get('/confirmar/:token', confirmar);
router.get('/olvide-password', formularioOlvidePassword);

export default router;