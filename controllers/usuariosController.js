const formularioLogin = (req,res) => {
        res.render('auth/login', {
            autenticado: true,
        })
    }

const formularioRegistro = (req,res) => {
        res.render('auth/register', {
            autenticado: true,
        })
    }
export {formularioLogin, formularioRegistro};