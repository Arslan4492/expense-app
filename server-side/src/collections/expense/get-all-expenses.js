const { ExpenseServices } = require("../../services")

module.exports = (req, res) => {
    return ExpenseServices.getAllExpenses(req, res)
}