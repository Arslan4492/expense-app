const Expense = require('../../model/expense')

const addExpense = async (req, res) => {
    try {
        const { itemName, price, date, userId } = req.body
        const _expense = new Expense({
            itemName, price, date, userId
        })
        await _expense.save()
        res.status(201).json({ message: 'successfully added expense!' })
    } catch (error) {
        console.log("🚀 ~ file: index.js:5 ~ addExpense ~ error", error)
    }
}
const getAllExpenses = async (req, res) => {
    try {
        const { id } = req.query
        let currentDate = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
        const allExpense = await Expense.find({
            userId: id,
            createdAt: { $gte: currentDate }
        }).lean()
        res.status(201).json({ message: 'got all expenses!!', allExpense })
    } catch (error) {
        console.log("🚀 ~ file: index.js:5 ~ addExpense ~ error", error)
    }
}

module.exports = { addExpense, getAllExpenses }