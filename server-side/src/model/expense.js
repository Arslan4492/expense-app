const mongoose = require('mongoose')

const expenseSchema = mongoose.Schema({
    itemName: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    date: {
        type: Date,
        require: true
    },
    userId:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        require: true
    }

}, { timestamps: true }
)

module.exports = mongoose.model('expense', expenseSchema)