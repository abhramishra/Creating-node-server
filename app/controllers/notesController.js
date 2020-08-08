const Note = require('../models/note')

module.exports.list = (req,res) => {
    Note.find().populate('category')
        .then(note => {
            res.json(note)
        }) 
        .catch(err => {
            res.json(err)
        }) 
}

module.exports.create =(req,res) => {
    const body = req.body
    const note = new Note(body)
    note.save()
        .then(note => {
            res.json(note)
        }) 
        .catch(err => {
            res.json(err)
        }) 
}

module.exports.show = (req,res) => {
    const id = req.params.id
    Note.findById(id).populate('category', ['name'])
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
}

module.exports.update = (req,res) => {
    const id = req.params.id
    const body = req.body
    Note.findByIdAndUpdate(id, body, { new: true, runValidators: true })
        .then((note) => {
            res.json(note)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.delete = (req,res) => {
    const id = req.params.id
    Note.findByIdAndDelete(id)
        .then((note) => {
            res.json(note)
        })
        .catch((err) => {
            res.json(err)
        })
}

/*
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
*/