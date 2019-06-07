'use strict'
const { Schema, model } = require('mongoose')

const ArticuloSchema = new Schema ({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    imagen: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    disponibilidad: {
        type: Number,
        required: true
    },
    categoria_id: {
        type: String,
        required: true
    },
})

module.exports = model('Articulo', ArticuloSchema)