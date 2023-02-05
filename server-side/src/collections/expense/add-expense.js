const { ExpenseServices } = require("../../services")

module.exports = (req, res) => {
    return ExpenseServices.addExpense(req, res)
}