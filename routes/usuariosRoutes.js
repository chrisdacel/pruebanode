import express from "express";
import { formularioLogin, formularioRegistro } from "../controllers/usuariosController.js"
const  router = express.Router();

router.get('/login', formularioLogin);
router.get('/register', formularioRegistro);

export default router;


// router.get('/', function(req, res){
//     res.send('Hola express')
// });
// router.post('/', function(req, res){
//     res.send('Hola encontrado')
// });

// router.get('/nosotros', function(req, res){
//     res.send('Nosotros')
// });

// router
//     .route('/')
//     .get(function(req, res){
//         res.send('Hola express')
//     })
//     .post(function(req, res){
//         res.send('Hola encontrado')
//     });