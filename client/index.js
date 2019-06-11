'use strict'
const Express = require('express')
const { PORT } = require('./config')
const routes = require('./routes')
const bodyParser = require('body-parser')
const favicon = require( "serve-favicon")
const path = require('path')
const hbs = require( "hbs")
const app = Express()

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(Express.static(__dirname + '/public'))
hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs')

routes(app)

app.listen(PORT, () => console.log(`Escuchando puerto ${ PORT }`))