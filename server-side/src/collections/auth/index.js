const express = require('express')
const login = require('./login')
const register = require('./register')

const routes = express.Router()

module.exports = () => {
    routes.post('/login', login)
    routes.post('/register', register)
    return routes
}