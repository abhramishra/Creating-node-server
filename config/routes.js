const express = require('express')
const router = express.Router()
const categoriesController = require('../app/controllers/categoriesController')
const notesController = require('../app/controllers/notesController')
const tagsController = require('../app/controllers/tagsController')

router.get('/categories', categoriesController.list)
router.get('/categories/:id', categoriesController.show)
router.post('/categories', categoriesController.create)
router.put('/categories/:id', categoriesController.update)
router.delete('/categories/:id', categoriesController.delete)

router.get('/notes', notesController.list)
router.get('/notes/:id', notesController.show)
router.post('/notes', notesController.create)
router.put('/notes/:id', notesController.update)
router.delete('/notes/:id', notesController.delete)

router.get('/tags', tagsController.list)
router.post('/tags', tagsController.create)

module.exports = router