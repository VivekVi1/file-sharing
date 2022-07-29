const mongoose = require('mongoose')
require('dotenv').config()

const connectDB = () => {
    const url = process.env.MONGO_CONNECTION_URL
    mongoose.connect(url, { useNewUrlParser: true })
    mongoose.connection.once('open', () => {
        console.log('Database Connected')
    })
}

module.exports = connectDB