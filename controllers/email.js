'use strict'
const { createTransport } = require('nodemailer')
const { ADMIN_EMAIL, ADMIN_EMAIL_PSSWD, ADMIN_EMAIL_SERVICE } = require('../config')

const enviarCorreo = (datos = undefined, callback) => {
    if (datos === undefined || datos === null || Object.keys(datos).length == 0)
        return callback(`Error: envío de datos incorrecto`)

    const { to, subject, text } = datos

    const transporter = createTransport({
        service: ADMIN_EMAIL_SERVICE,
        auth: {
            user: ADMIN_EMAIL,
            pass: ADMIN_EMAIL_PSSWD
        }
    })

    const mailOptions = {
        from: ADMIN_EMAIL,
        to,
        subject,
        html: text
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) console.log(err)
        else callback(null, `Email enviado: ${ info.response }`)
    })
}

const plantillaRegistroPendiente = datos => {
    let { nombre, url, token } = datos
    
    return `<br>
    Hola, ${ nombre }.<br>
    Estás a un paso de poder usar el sitio de compras en línea para papelería más seguro.
    <br>
    <a href="${ url }/${ token }"><button>Confirmar cuenta</button></a>
    <footer><small>Si no solicitaste registrar tu dirección de correo para este sitio, por favor ignora este correo.</small></footer>
    `
}

const plantillaRegistroExitoso = datos => {
    let { nombre } = datos
    return `<br>
    Hola, ${ nombre }.
    <br>
    Gracias por registrarte con nosotros. Ahora puedes disfrutar de las compras en línea más seguras.
    <br>`
}

module.exports = { 
    enviarCorreo,
    plantillaRegistroExitoso,
    plantillaRegistroPendiente,
}