const mongoose = require('mongoose')
const Schema = mongoose.Schema

// creating schema
const categorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    body: {
        type: String
    },
    createdAt: {
        type: String,
        required: true,
        default: Date.now()
    }
})
// creating model
const Category = mongoose.model('Category', categorySchema)

module.exports = Category