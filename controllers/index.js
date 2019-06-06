'use strict'

const getIndex = (req, res) => {

}

const getCatalogo = (req, res) => {

}

const getLogin = (req, res) => {
    
}

const postLogin = (req, res) => {
    
}

const getRegistrar = (req, res) => {

}

const postUsuario = (req, res) => {

}

const getCategorias = (req, res) => {
    
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

}

const postCarrito = (req, res) => {

}

const putCarrito = (req, res) => {

}

const deleteCarrito = (req, res) => {

}

const getPerfil = (req, res) => {

}

const putPerfil = (req, res) => {

}

const getEnvios = (req, res) => {

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
    postEnvio
}