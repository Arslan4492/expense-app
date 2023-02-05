const express = require('express')
const auth = require('./auth')
const expense = require('./expense')
const routes = express.Router()

module.exports = () => {
    routes.use('/auth', auth())
    routes.use('/expense', expense())
    return routes
}