//require mongoose / schema
const mongoose = require('mongoose')
const { Schema } = mongoose 


//schema
const bookSchema = new Schema({
    title: String,
    description: String,
    year: Number,
    quantity: Number,
    imageURL: String
})

//export and module
const Book = mongoose.model('Book', bookSchema)
module.exports = Book

