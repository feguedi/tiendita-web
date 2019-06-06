'use strict'

export const getIndex = (req, res) => {

}

export const getLogin = (req, res) => {
    
}

export const postLogin = (req, res) => {
    
}

export const getRegistrar = (req, res) => {

}

export const postUsuario = (req, res) => {

}

export const getCategorias = (req, res) => {
    
}

export const getCategoria = (req, res) => {
    const id = req.params.id

    const obj = {
        id,
        content: 'Content ' + id
    }

    res.json(obj)
}

export const getArticulo = (req, res) => {
    const id = req.params.id

    const obj = {
        id,
        content: 'Content ' + id
    }

    res.json(obj)
}

export const getCarrito = (req, res) => {

}

export const postCarrito = (req, res) => {

}

export const putCarrito = (req, res) => {

}

export const deleteCarrito = (req, res) => {

}
