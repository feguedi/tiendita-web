'use strict'
const { getIndex, getCatalogo, getLogin, postLogin, getRegistrar, postUsuario, getCategorias, getCategoria, getArticulo, getCarrito, postCarrito, putCarrito, deleteCarrito, getPerfil, putPerfil, getEnvios, getEnvio, postEnvio } = require("../controllers")
const verifyToken = require("../controllers/token")

const routes = app => {

    app.route('/')
       .get(getIndex)

    app.route('/catalogo')
       .get(getCatalogo)

    app.route('/login')
       .get(getLogin)
       .post(verifyToken, postLogin)

    app.route('/registrar')
       .get(getRegistrar)
       .post(verifyToken, postUsuario)

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
       .get(getEnvio)
       .post(postEnvio)

}

module.exports = routes