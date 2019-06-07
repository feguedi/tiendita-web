'use strict'
const { getIndex, getConfirmacionRegistro, getCatalogo, getLogin, postLogin, getRegistrar, postUsuario, getCategorias, getCategoria, getArticulo, getCarrito, postCarrito, putCarrito, deleteCarrito, getPerfil, putPerfil, getEnvios, getEnvio, postEnvio, getLogout } = require("../controllers")
const { verifyToken } = require("../controllers/token")

const routes = app => {

    app.route('/')
        .get(getIndex)

    app.route('/:token')
        .get(getConfirmacionRegistro)

    app.route('/catalogo')
        .get(getCatalogo)

    app.route('/login')
        .get(getLogin)
        .post(verifyToken, postLogin)

    app.route('/registrar')
        .get(getRegistrar)
        .post(postUsuario)

    app.route('/categorias')
        .get(getCategorias)

    app.route('/categoria/:id')
        .get(getCategoria)

    app.route('/articulo/:id')
        .get(getArticulo)

    app.route('/carrito')
        .get(verifyToken, getCarrito)
        .post(verifyToken, postCarrito)
        .put(verifyToken, putCarrito)
        .delete(verifyToken, deleteCarrito)

    app.route('/perfil')
        .get(getPerfil)
        .put(putPerfil)

    app.route('/perfil/envios')
        .get(getEnvios)

    app.route('/perfil/envio/:id')
        .get(verifyToken, getEnvio)
        .post(verifyToken, postEnvio)

    app.route('/logout')
        .get(verifyToken, getLogout)

}

module.exports = routes