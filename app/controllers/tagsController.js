const Tag = require('../models/tag')

module.exports.list = (req,res) => {
    Tag.find()
        .then(tag => {
            res.json(tag)
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports.create = (req,res) => {
    const body = req.body
    const tag = new Tag(body)
    tag.save()
        .then(tag => {
            res.json(tag)
        })
        .catch(err => {
            res.json(err)
        })
}