'use strict'
const { getIndex, getConfirmacionRegistro, getCatalogo, getLogin, postLogin, getRegistrar, postUsuario, getCategorias, getCategoria, getArticulo, getCarrito, postCarrito, putCarrito, deleteCarrito, getPerfil, putPerfil, getEnvios, getEnvio, postEnvio, getLogout } = require("../controllers")

const routes = app => {

    app.route('/')
        .get(getIndex)

    app.route('/s/:token')
        .get(getConfirmacionRegistro)

    app.route('/catalogo')
        .get(getCatalogo)

    app.route('/login')
        .get(getLogin)
        .post(postLogin)

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
        .get(getCarrito)
        .post(postCarrito)
        .put(putCarrito)
        .delete(deleteCarrito)

    app.route('/perfil')
        .get(getPerfil)
        .put(putPerfil)

    app.route('/perfil/envios')
        .get(getEnvios)

    app.route('/perfil/envio/:id')
        .get(getEnvio)
        .post(postEnvio)

    app.route('/logout')
        .get(getLogout)

}

module.exports = routes