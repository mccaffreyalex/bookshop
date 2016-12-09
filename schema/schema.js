'use strict'

// import the mongoose package
const mongoose = require('mongoose')

const host = process.env.MONGO_HOST || '10.240.0.6'
const port = process.env.MONGO_PORT || 27019
const database = process.env.MONGO_DB || '303bookshop'

mongoose.connect(`mongodb://${host}:${port}/${database}`)

mongoose.Promise = global.Promise
const Schema = mongoose.Schema

// create a schema
const userSchema = new Schema({
    name: String,
    username: String,
    password: String
})

// create a model using the schema
exports.User = mongoose.model('User', userSchema)

// create a schema
const bookSchema = new Schema({
  account: String,
    title: String,
    authors: String,
    description: String,
  bookID: String
})

// create a model using the schema
exports.Book = mongoose.model('Book', bookSchema)

