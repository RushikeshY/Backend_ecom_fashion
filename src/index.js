const express = require('express')
const app = express()
const cors = require('cors')
// const cookieParser = require('cookie-parser')


// middleware
app.use(express.json())
app.use(cors())
// app.use(cookieParser())


module.exports = app