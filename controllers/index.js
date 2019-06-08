'use strict'
const jwt = require('jsonwebtoken')
const { crearUsuario } = require('../models')
const { hashSync } = require('bcrypt')
const { enviarCorreo, plantillaRegistroPendiente } = require('./email')
const { SECRET_KEY, HOST, PORT } = require('../config')

const getIndex = (req, res) => {
    res.json({ message: 'get Index' })
}

const getConfirmacionRegistro = (req, res) => {
    let token = req.params.token
    // TODO: buscar usuario con dicho token
    jwt.verify(token, SECRET_KEY, (err, authData) => {
        if (err) res.status(400).render('error', { codigo: 400 })
        else res.render('layouts/reg-success', { registro: false, nombre: authData.username })
    })
    // TODO: eliminar registro de token en el usuario que lo tenga
}

const getCatalogo = (req, res) => {
    res.json({ message: 'get Catalogo' })
}

const getLogin = (req, res) => {
    res.render('layouts/login', { title: 'Entrar' })
    // res.json({ message: 'get Login' })
}

const postLogin = (req, res) => {
    // res.json({ message: 'post Login' })
    res.render('index', { title: `Login exitoso`, mensaje: x`${ req }` })
}

const getRegistrar = (req, res) => {
    res.render('layouts/registrar', { title: 'Regístrate' })
}

const postUsuario = (req, res) => {
    let body = req.body
    let nombre = body.name
    let username = body.username
    let email = body.email
    let password = hashSync(body.password, 10)
    let token = jwt.sign({ username, password }, SECRET_KEY, { expiresIn: '24h' })

    crearUsuario({ nombre, username, email, password, reg_token: token }, (err, usuarioBD) => {
        if (err) return res.status(400).render('error', { codigo: 400, mensaje: err })
        // let token = generateEmailToken(usuarioBD.email)
        res.render('layouts/reg-success', { registro: true, nombre: usuarioBD.nombre, title: 'Registro exitoso' })
    })

    const datosCorreo = {
        to: email,
        subject: 'Correo de confirmación',
        text: plantillaRegistroPendiente({ nombre, url: `${ HOST }:${ PORT }`, token })
    }

    enviarCorreo(datosCorreo, (err, msj) => {
        if (err) console.log(`Error: ${ err }`)
        console.log(`${ msj }`)
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
    getConfirmacionRegistro,
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