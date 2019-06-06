'use strict'
import { getIndex, getLogin, postLogin, getRegistrar, postUsuario, getCategorias, getCategoria, getArticulo, getCarrito, postCarrito, putCarrito, deleteCarrito } from "../controllers"
import { verifyToken } from "../controllers/token"

export const routes = app => {

    app.route('/')
       .get(getIndex)

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

}

