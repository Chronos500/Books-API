// DEPENDENCIES
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

// CONFIG/MIDDLEWARE
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
app.use(express.json())
app.use(cors())
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to mongo on: ', process.env.MONGO_URI)
})

//ROUTES
app.get('/', (req, res) => {
    res.send('Hello World')
})

// books:
const booksController = require('./controllers/books_controller')
app.use('/books', booksController)

// LISTEN
app.listen(PORT, () => {
    console.log('Greetings! From port: ',  PORT)
})