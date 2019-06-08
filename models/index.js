'use strict'
const { BD_HOST, BD_PORT, BD_NAME } = require('../config')
const mongoose = require('mongoose')
const Usuario = require('./usuario')

const conexion = () => {
    mongoose.connect(`${ BD_HOST }:${ BD_PORT }/${ BD_NAME }`, (err, res) => {
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

    let { nombre, direccion, username, email, password, reg_token } = obj
    
    let usuario = new Usuario({
        nombre, direccion, username, email, password, reg_token
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

    let { usuario, fecha } = obj

}

module.exports = {
    crearUsuario
}