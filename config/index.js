'use strict'
import { config } from 'dotenv'
const res = config()

if (res.error) throw res.error
const { parsed: env } = res

export const PORT = env.PORT
export const BD_NAME = env.BD_NAME
export const BD_USERNAME = env.BD_USERNAME
export const BD_PSSWD = env.BD_PSSWD
export const BD_HOST = env.BD_HOST
export const BD_PORT = env.BD_PORT
export const HOME = env.HOME