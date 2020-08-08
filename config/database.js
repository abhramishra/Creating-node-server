 const mongoose = require('mongoose')

 const setupDB = () => {
    mongoose.connect('mongodb://localhost:27017/oct-weekend-notes-app', { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log('Connected to db')
        })
        .catch((err) => {
            console.log(err)
        })
 }
 module.exports = setupDB