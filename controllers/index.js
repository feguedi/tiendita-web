'use strict'
const jwt = require('jsonwebtoken')
const { crearUsuario } = require('../models')
const { SECRET_KEY } = require('../config')

const getIndex = (req, res) => {
    res.json({ message: 'get Index' })
}

const getCatalogo = (req, res) => {
    res.json({ message: 'get Catalogo' })
}

const getLogin = (req, res) => {
    res.json({ message: 'get Login' })
}

const postLogin = (req, res) => {
    res.json({ message: 'post Login' })
}

const getRegistrar = (req, res) => {
    res.json({ message: 'get Registrar' })
}

const postUsuario = (req, res) => {
    // res.json({ message: 'post Usuario' })
    let body = req.body
    let nombre = body.name
    let username = body.username
    let email = body.email
    let password = body.password

    crearUsuario({ nombre, username, email, password }, (err, usuarioBD) => {
        if (err) res.status(400).render('error', { codigo: 400, mensaje: err })
        res.json({ message: `Mensaje de la BD: ${ usuarioBD }` })
    })
}

const getCategorias = (req, res) => {
    res.json({ message: 'get Categorias' })
}

const getCategoria = (req, res) => {
    const id = req.params.id

    const obj = {
        id,
        content: 'Content ' + id
    }

    res.json(obj)
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
    res.json({ message: 'put Carrito' })
}

const deleteCarrito = (req, res) => {
    res.json({ message: 'delete Carrito' })
}

const getPerfil = (req, res) => {
    res.json({ message: 'get Perfil' })
}

const putPerfil = (req, res) => {
    res.json({ message: 'put Perfil' })
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
    getCatalogo,
    getLogin,
    postLogin,
    getRegistrar,
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