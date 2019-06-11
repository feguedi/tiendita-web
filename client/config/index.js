'use strict'
const { config } = require('dotenv')
const res = config()

if (res.error) throw res.error
const { parsed: env } = res

module.exports = {
    PORT: env.PORT,
    HOST: env.HOST,
    SECRET_KEY: env.SECRET_KEY,
    HOME: env.HOME,
    SERVER: env.SERVER
}