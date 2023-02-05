const mongoose = require('mongoose')

module.exports = () => {
    try {
        mongoose.set("strictQuery", false);
        mongoose.connect(process.env.DB_CONNECTION, {}, () => console.log('Database connected!!'))
    } catch (error) {
        console.log("🚀 ~ file: index.js:7 ~ error", error)
    }
}