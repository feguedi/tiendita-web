'use strict'
const jwt = require('jsonwebtoken')
const { crearUsuario, actualizarPerfil, articulos, categorias, categoria } = require('../models')
const { hashSync } = require('bcrypt')
const { pick } = require('underscore')
const { enviarCorreo, plantillaRegistroPendiente } = require('./email')
const { SECRET_KEY, HOST, PORT } = require('../config')

const getIndex = (req, res) => {
    // TODO: regresar categorias y algunos artículos aleatorios
    res.json({ message: 'get Index' })
}

const getConfirmacionRegistro = (req, res) => {
    let token = req.params.token
    // TODO: buscar usuario con dicho token
    jwt.verify(token, SECRET_KEY, (err, authData) => {
        if (err) res.status(400).json({ message: err })
        else res.json({ registro: false, nombre: authData.username })
    })
    // TODO: eliminar registro de token en el usuario que lo tenga
}

const getCatalogo = (req, res) => {
    let p = req.query.p || 0
    articulos(p, (err, art) => {
        if (err) res.status(400).json({ message: err })
        res.json({ articulos: art })
    })
}

const postLogin = (req, res) => {
    res.json({ message: 'post Login' })
}

const postUsuario = (req, res) => {
    let body = req.body
    let nombre = body.name
    let username = body.username
    let email = body.email
    let password = hashSync(body.password, 10)
    let telefono = hashSync(body.telefono, 10)
    let token = jwt.sign({ username, password }, SECRET_KEY, { expiresIn: '24h' })

    crearUsuario({ nombre, username, email, password, telefono, reg_token: token }, (err, usuarioBD) => {
        if (err) return res.status(400).json({ mensaje: err })
        res.json({ registro: true, nombre: usuarioBD.nombre })
    })

    // const datosCorreo = {
    //     to: email,
    //     subject: 'Correo de confirmación',
    //     text: plantillaRegistroPendiente({ nombre, url: `${ HOST }:${ PORT }`, token })
    // }

    // enviarCorreo(datosCorreo, (err, msj) => {
    //     if (err) console.log(`Error: ${ err }`)
    //     console.log(`${ msj }`)
    // })
}

const getCategorias = (req, res) => {
    categorias((err, cat) => {
        if (err) return res.status(400).json({ message: err })
        res.json({ categorias: cat })
    })
}

const getCategoria = (req, res) => {
    let id = req.params.id
    id = id.toLowerCase()

    categoria(id, (err, art) => {
        if (err) return res.status(400).json({ message: err })
        res.json({ articulos: art })
    })
}

const getArticulo = (req, res) => {
    const id = req.params.id

    const obj = {
        id,
        content: 'Content ' + id
    }

    res.json(obj)
}

const getCarrito = (req, res) => {
    res.json({ message: 'get Carrito' })
}

const postCarrito = (req, res) => {
    res.json({ message: 'post Carrito' })
}

const putCarrito = (req, res) => {
    let body = req.body
    res.json({ message: 'put Carrito' })
}

const deleteCarrito = (req, res) => {
    res.json({ message: 'delete Carrito' })
}

const getPerfil = (req, res) => {
    res.json({ message: 'get Perfil' })
}

const putPerfil = (req, res) => {
    let body = pick(req.body, ['nombre', 'calle', 'numero', 'colonia', 'cp', 'municipio', 'estado', 'telefono'])

    Object.keys(body).forEach(el => { console.log(`putPerfil: body: ${ el } -> ${ body[el] }`) })

    actualizarPerfil(body, (err, usuarioBD) => {
        if (err) return res.status(400).json({ message: "Bad request" })
        console.log(`putPerfil: respuesta: ${ usuarioBD }`)
        res.json(usuarioBD)
    })
}

const getEnvios = (req, res) => {
    res.json({ message: 'get Envios' })
}

const getEnvio = (req, res) => {
    const id = req.params.id

    const obj = {
        id,
        content: 'Content ' + id
    }

    res.json(obj)
}

const postEnvio = (req, res) => {
    res.json({ message: 'post Envio' })
}

const getLogout = (req, res) => {
    jwt.verify(req.token, SECRET_KEY, (err, authData) => {
        console.log(`/logout: token: ${ req.token }`)
        if(err) {
            res.sendStatus(403)
            console.log(`/logout: ${ err }`)
            console.log(`/logout: ${ typeof authData }`)
        }
        else {
            res.json({
                message: 'get Logout',
                authData
            })
        }
    })
}

module.exports = {
    getIndex,
    getConfirmacionRegistro,
    getCatalogo,
    postLogin,
    postUsuario,
    getCategorias,
    getCategoria,
    getArticulo,
    getCarrito,
    postCarrito,
    putCarrito,
    deleteCarrito,
    getPerfil,
    putPerfil,
    getEnvios,
    getEnvio,
    postEnvio,
    getLogout
}