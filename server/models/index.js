'use strict'
const { BD_ENV, BD_HOST, BD_PORT, BD_NAME, BD_USERNAME, BD_PSSWD } = require('../config')
const mongoose = require('mongoose')
const Usuario = require('./usuario')
const Articulo = require('./articulo')
const Categoria = require('./categoria')
const Envio = require('./envio')
const Carrito = require('./carrito')

const conexion = () => {
    if (BD_ENV != '' || BD_ENV != '') return console.log(`models: conexion: Por favor especifica un entorno para la base de datos`)
    let bd_dir = BD_ENV == 'local' ? `mongodb://${ BD_HOST }:${ BD_PORT }/${ BD_NAME }` : `mongodb+srv://${ BD_USERNAME }:${ BD_PSSWD }@${ BD_HOST }/${ BD_NAME }`
    mongoose.connect(bd_dir, { useCreateIndex: true, useNewUrlParser: true }, (err, res) => {
        if (err) throw err
        console.log(`Base de datos corriendo`)
    })
}

const crearUsuario = (obj = undefined, callback) => {
    conexion()

    if (obj === undefined || obj === null || Object.keys(obj).length === 0) {
        console.log(`Error en envío de datos`)
        callback({ message: `Error en envío de datos` })
    }

    let { nombre, direccion, username, email, password, telefono, reg_token } = obj

    let usuario = new Usuario({
        nombre, direccion, username, email, password, telefono, reg_token
    })

    usuario.save((err, usuarioBD) => {
        if (err) callback(err)
        else callback(null, usuarioBD)
    })
}

const actualizarPerfil = (obj = undefined, callback) => {
    conexion()

    if (obj === undefined || obj === null || Object.keys(obj).length === 0) {
        console.log(`Error en envío de datos`)
        callback({ message: `Error en envío de datos` })
    }

    let { username, datos } = obj

    Usuario.find({ "apodo": username }, (err, person) => {
        if (err) return callback(err)
        callback(null, person)
    })
}

const articulos = (p, callback) => {
    conexion()
    // const limite = Articulo.length <= 5 ? Articulo.length : 5
    let limite = 0
    console.log(`models: articulos: length -> ${ limite }`)
    Articulo.find({}, 'nombre categoria precio descripcion disponibilidad')
        .skip(Number(p))
        .exec((err, art) => {
            if (err) return callback(err)
            callback(null, art)
        })
        // .limit(limite)
}

const categorias = callback => {
    conexion()
    Categoria.find({})
        .exec((err, cat) => {
            if (err) return callback(err)
            callback(null, cat)
        })
}

const categoria = (cat, callback) => {
    const mayuscula = str => str.charAt(0).toUpperCase() + str.slice(1)
    conexion()
    Articulo.find({ "categoria": mayuscula(cat) }, 'nombre categoria precio descripcion disponibilidad')
        .exec((err, art) => {
            if (err) return callback(err)
            if (art.length == 0) return callback(`Categoría no encontrada`)
            callback(null, art)
        })
}

module.exports = {
    articulos,
    categorias,
    categoria,
    actualizarPerfil,
    crearUsuario
}