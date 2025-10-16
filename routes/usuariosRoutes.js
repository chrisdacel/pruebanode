import express from "express";
import { formularioLogin, formularioOlvidePassword, formularioRegistro } from "../controllers/usuariosController.js"
const  router = express.Router();

router.get('/login', formularioLogin);
router.get('/register', formularioRegistro);
router.get('/olvide-password', formularioOlvidePassword);

export default router;