'use strict'
const { Schema } = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const UsuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, `El nombre es necesario`]
    },
    apodo: {
        type: String,
        unique: true,
        required: false
    },
    email: {
        type: String,
        unique: true,
        required: [true, `El correo es necesario`]
    },
    direccion: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: [true, `La contraseña es necesaria`]
    },
    tokenSesion: {
        type: String,
        required: false
    },
})
UsuarioSchema.plugin(uniqueValidator, { message: '{PATH} ya existe' })

module.exports = { Usuario: UsuarioSchema }