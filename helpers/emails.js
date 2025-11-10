import nodemailer from 'nodemailer'

const emailRegistro = async(datos) =>{
    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        },
    });
    const {email, nombre, token} = datos

    // Enviar el correo
    await transport.sendMail({
        from: 'BienesRaices.sena',
        to: email,
        subject: 'Reestablecer tu contraseña de Bienes Raices Sena',
        text: 'Reestablecer tu contraseña  de Bienes Raices Sena',
        html: `
        <p>Hola ${nombre}, comprueba tu cuenta en Bienes Raices Sena</p>
        <p>Tu cuenta ya esta lista, solo debes confirmarla en el siguiente enlace:
        <a href='${process.env.BACKEND_URL}:${process.env.PORT ?? 3000}/auth/confirmar/${token}'>Confirma tu cuenta</a></p>
        <p>Si tu no creaste la cuenta, puedes ignorar el mensaje</p>
        `
    })
};

const emailOlvidePassword = async(datos) =>{
    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        },
    });
    const {email, nombre, token} = datos

    // Enviar el correo
    await transport.sendMail({
        from: 'BienesRaices.sena',
        to: email,
        subject: 'Confirma tu cuenta de Bienes Raices Sena',
        text: 'Confirma tu cuenta  de Bienes Raices Sena',
        html: `
        <p>Hola ${nombre}, has solicitado reestablecer tu cuenta en Bienes Raices Sena</p>
        <p>Restarura tu contraseña en el siguiente enlace:
        <a href='${process.env.BACKEND_URL}:${process.env.PORT ?? 3000}/auth/olvide-password/${token}'>Reestablecer</a></p>
        <p>Si tu no creaste la cuenta, puedes ignorar el mensaje</p>
        `
    })
};

export {emailRegistro, emailOlvidePassword};