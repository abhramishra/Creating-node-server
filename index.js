const express = require('express')
const setupDB = require('./config/database')
const routes = require('./config/routes')
const cors = require('cors')

const app = express()
const PORT = 3033
// to read the incooming data
app.use(express.json())

app.use('/', routes)
app.use(cors())

app.get('/', (req,res) => {
    res.json({text : 'Welcome to the website'})
})    

// connect to DB
setupDB()


app.listen(PORT, () => {
    console.log('Listening to port', PORT)
})