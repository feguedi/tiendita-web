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
    ADMIN_EMAIL: env.ADMIN_EMAIL,
    ADMIN_EMAIL_PSSWD: env.ADMIN_EMAIL_PSSWD,
    ADMIN_EMAIL_SERVICE: env.ADMIN_EMAIL_SERVICE,
    BD_ENV: env.BD_ENV,
    BD_NAME: env.BD_NAME,
    BD_USERNAME: env.BD_USERNAME,
    BD_PSSWD: env.BD_PSSWD,
    BD_HOST: env.BD_HOST,
    BD_PORT: env.BD_PORT
}