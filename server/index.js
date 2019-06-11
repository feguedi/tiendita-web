'use strict'
const { PORT } = require("./config")
const routes = require("./routes")
const Express = require( "express")
const bodyParser = require( "body-parser")

const app = Express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

routes(app)

app.listen(PORT, () => { console.log(`Escuchando en puerto ${ PORT }`) })