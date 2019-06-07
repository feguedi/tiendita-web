'use strict'
const { Schema, model } = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const CarritoSchema = new Schema({
    usuario_id: {
        type: String,
        required: true
    },
    articulos: {
        type: Object,
        required: true
    },
    estado: {
        type: Boolean,
        required: true
    }
})

CarritoSchema.plugin(uniqueValidator, 'Procedimiento inválido')

module.exports = model('Carrito', CarritoSchema)