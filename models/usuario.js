'use strict'
const { Schema, model } = require('mongoose')
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
    confirmado: {
        type: Boolean,
        default: false,
        required: true
    }
})

UsuarioSchema.methods.toJSON = function () {
    let user = this;
    let userObject = user.toObject()
    delete userObject.password
    delete userObject.__v
    delete userObject._id

    return userObject
}

UsuarioSchema.plugin(uniqueValidator, { message: '{PATH} ya existe' })

module.exports = model('Usuario', UsuarioSchema)