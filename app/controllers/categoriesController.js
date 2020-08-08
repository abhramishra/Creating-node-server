const Category = require('../models/category')
const Note = require('../models/note')

module.exports.list = (req,res) => {
    Category.find()
        .then((category) => {
            res.json(category)
        })
        .catch((err) => {
            res.json(err)
        })
}
/*
 ------example for async await------
module.exports.list = async(req,res) => {
    try {
      let categories =  await Category.find()
      res.json(categories)
    } catch (error) {
        res.json(error)
    }
}
*/

module.exports.create = (req,res) => {
    const body = req.body
    const category = new Category(body)
    category.save()
        .then((category) => {
            res.json(category)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.show = (req,res) => {
    const id = req.params.id
    Promise.all([ Category.findById(id), Note.find({ category: id }) ])
        .then(values => {
            [ category, notes ] = values
            const newCategory = category.toObject() // to convert it a regular object from mongoose object
            newCategory.notes = notes
            res.json(newCategory)
            // res.json({
            //     category,
            //     notes
            // })
        })
        .catch(err => {
            res.json(err)
        }) 
}

module.exports.update = (req,res) => {
    const id = req.params.id
    const body = req.body
    Category.findByIdAndUpdate(id, body, { new: true, runValidators: true })
        .then((category) => {
            res.json(category)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.delete = (req,res) => {
    const id = req.params.id
    Category.findByIdAndDelete(id)
        .then((category) => {
            res.json(category)
        })
        .catch((err) => {
            res.json(err)
        })
}
