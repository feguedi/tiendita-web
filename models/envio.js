'use strict'
const { Schema, model } = require('mongoose')

let estadosValidos = {
    values: ['pendiente', 'enviado'],
    message: '{VALUE} no es un estado válido'
}

const EnvioSchema = new Schema({
    usuario_id: {
        type: String,
    },
    estado: {
        type: String,
        default: 'pendiente',
        enum: estadosValidos
    },
    fechaSolicitud: {
        type: Date,
        default: Date.now,
        required: true
    }
})

module.exports = model('Envio', EnvioSchema)