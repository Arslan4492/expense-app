const express = require('express')
const { requireAuth } = require('../../middlewares/authenticate.middleware')
const add = require('./add-expense')
const getAllExpenses = require('./get-all-expenses')
const routes = express.Router()

module.exports = () => {
    routes.post('/', add)
    routes.get('/', requireAuth, getAllExpenses)
    return routes
}