'use strict'
//const express = require('express')
//const app = express()
//const bodyParser = require('body-parser')
//const favicon = require('serve-favicon')
import { PORT } from "./config"
import { routes } from "./routes"
import * as Express from "express"
import * as bodyParser from "body-parser"
import * as favicon from "serve-favicon"
import * as hbs from "hbs"

const app = Express()

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(Express.static(__dirname + '/public'))
hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs')

routes(app)

app.listen(PORT, () => { console.log(`Escuchando en puerto ${ PORT }`) })