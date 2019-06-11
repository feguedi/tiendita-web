'use strict'
const { Schema, model } = require('mongoose')

const CategoriaSchema = new Schema ({
    nombre: {
        type: String,
        unique: true,
        required: true
    }
})

module.exports = model('Categoria', CategoriaSchema)