const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Creating Schema
const noteSchema = new Schema({
    title: {
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
    },
    category: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Category"     // here "Category" is the model name (not the variable)
    }
})
// Creating note Model
const Note = mongoose.model('Note', noteSchema)

module.exports = Note