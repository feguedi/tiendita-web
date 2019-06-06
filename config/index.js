'use strict'
const { config } = require('dotenv')
const res = config()

if (res.error) throw res.error
const { parsed: env } = res

module.exports = {
    PORT: env.PORT,
    SECRET_KEY: env.SECRET_KEY,
    BD_NAME: env.BD_NAME,
    BD_USERNAME: env.BD_USERNAME,
    BD_PSSWD: env.BD_PSSWD,
    BD_HOST: env.BD_HOST,
    BD_PORT: env.BD_PORT
}