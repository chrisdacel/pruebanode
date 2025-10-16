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

const formularioOlvidePassword = (req,res) => {
    res.render('auth/olvide-password', {
        tituloPagina: 'Olvide contraseña',
    })
}
export {formularioLogin, formularioRegistro, formularioOlvidePassword};