const app = require('./index')
require('colors')
const connectDB = require('./config/database')
require('dotenv').config()


const PORT = process.env.PORT || 8080



// Handled Uncaught Exception
process.on('uncaughtException', (err) => {
  console.log(`Error: ${err.message}`)
  console.log('Shutting down the server because of Uncaught Exception')

  process.exit(1)
})

// connecting the database for listing the port
const server = app.listen(PORT, async () => {
  try {
    await connectDB()
    console.log(`Server is Listening On Port Number:- ${PORT}`.bgGreen.italic)
  } catch (error) {
    console.error(`Error:${error.message}`.red.bold)
  }
})

// Handled Promise Rejection
process.on('unhandledRejection', (err) => {
  console.log(`Error: ${err.message}`)
  console.log(
    'Shutting down the server because of Unhandled Promise Rejection'
  )

  server.close(() => {
    process.exit(1)
  })
})