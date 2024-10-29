const mongoose = require('mongoose')
require('colors')
require('dotenv').config()
mongoose.set('strictQuery', false) // for removing DeprecationWarning

const db = process.env.DB_URL 

// database connection
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(db)
    console.log(
      `MongoDB Connected: ${conn.connection.host}`.bgMagenta.underline
    )
  } catch (error) {
    console.error(`Error:${error.message}`.red.bold)
  }
}

module.exports = connectDB
