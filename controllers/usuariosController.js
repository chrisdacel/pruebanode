import { check, validationResult } from 'express-validator'

import Usuario from '../models/Usuario.js'

const formularioLogin = (req,res) => {
        res.render('auth/login', {
            tituloPagina: 'Inicio de Sesion',
        })
    }

const formularioRegistro = (req,res) => {
        res.render('auth/register', {
            tituloPagina: 'Registro de usuario',
        })
    }

const registrar = async (req,res) => {
    // Validaciones
    await check('nombre').notEmpty().withMessage('El nombre no puede estar vacio').run(req);
    await check('email').isEmail().withMessage('Esto no parece un correo').run(req);
    await check('password').isLength({min: 6}).withMessage('La contraseña debe ser al menos de 6 caracteres').run(req);
    await check('repeat_password').equals(req.body.password).withMessage('La contraseña no es igual').run(req);

    // Verificar que el resultado este vacio
    // if(resultado.array())

    let resultado = validationResult(req);
    res.json(resultado.array());

    // const usuarios = await Usuario.create(req.body);
}

const formularioOlvidePassword = (req,res) => {
    res.render('auth/olvide-password', {
        tituloPagina: 'Olvide contraseña',
    })
}
export {formularioLogin, registrar, formularioRegistro, formularioOlvidePassword};