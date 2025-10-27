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

const registrar = (req,res) => {
    console.log('Registrando...')
}

const formularioOlvidePassword = (req,res) => {
    res.render('auth/olvide-password', {
        tituloPagina: 'Olvide contraseña',
    })
}
export {formularioLogin, registrar, formularioRegistro, formularioOlvidePassword};