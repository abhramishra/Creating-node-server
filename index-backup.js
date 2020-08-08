const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 3000
// to read the incooming data
app.use(express.json())

// REQUEST HANDLER
    // app.httpMethod('url', callback function)

    app.get('/', (req,res) => {
        res.json({text : 'Welcome to the website'})
    })    

// DB Configuration
mongoose.connect('mongodb://localhost:27017/oct-weekend-notes-app', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to db')
    })
    .catch((err) => {
        console.log(err)
    })

// Creating Schema
const Schema = mongoose.Schema
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
const Note = mongoose.model('Note',noteSchema )     // The model name should be singular and first letter should be capital 
// const note = new Note()
// console.log(note)

// GET localhost:3033/notes
app.get('/notes',(req, res) => {
    Note.find().populate('category')
        .then((note) => {
            res.json(note)
        })
        .catch((err) => {
            res.json(err)
        })
})

// POST localhost:3033/notes
app.post('/notes',(req,res) => {
    const body = req.body
    // { title, body }
    const note = new Note(body)
    note.save()
        .then((note) => {
            res.json(note)
        })
        .catch((err) => {
            res.json(err)
        })
})

// GET localhost:3033/notes/:id
app.get('/notes/:id',(req,res) => {
    const id = req.params.id
    Note.findById(id)
        .then((note) => {
            if (note) {
                res.json(note)
            } else {
                res.json({})
            }            
        })
        .catch((err) => {
            res.json(err)
        })
})

// PUT localhost:3033/notes/:id
app.put('/notes/:id',(req,res) => {
    const id = req.params.id
    const body = req.body
    Note.findByIdAndUpdate(id, body, { new: true, runValidators: true })
        .then((note) => {
            res.json(note)
        })
        .catch((err) => {
            res.json(err)
        })
})

// DELETE localhost:3033/notes/:id
app.delete('/notes/:id',(req,res) => {
    const id = req.params.id
    Note.findByIdAndDelete(id)
        .then((note) => {
            res.json(note)
        })
        .catch((err) => {
            res.json(err)
        })
})




/* - create a schema for a category - name
   - create a model called as Category

   - add api's to perform CRUD operation on a category
*/

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

app.get('/categories', (req,res) => {
    Category.find()
        .then((category) => {
            res.json(category)
        })
        .catch((err) => {
            res.json(err)
        })
})

app.post('/categories', (req,res) => {
    const body = req.body
    const category = new Category(body)
    category.save()
        .then((category) => {
            res.json(category)
        })
        .catch((err) => {
            res.json(err)
        })
})

app.get('/categories/:id', (req,res) => {
    const id = req.params.id
    Category.findById(id)
        .then((category) => {
            if (category) {
                res.json(category)
            } else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
})

app.put('/categories/:id', (req,res) => {
    const id = req.params.id
    const body = req.body
    Category.findByIdAndUpdate(id, body, { new: true, runValidators: true })
        .then((category) => {
            res.json(category)
        })
        .catch((err) => {
            res.json(err)
        })
})

app.delete('/categories/:id', (req,res) => {
    const id = req.params.id
    Category.findByIdAndDelete(id)
        .then((category) => {
            res.json(category)
        })
        .catch((err) => {
            res.json(err)
        })
})

app.listen(PORT, () => {
    console.log('Listening to port', PORT)
})