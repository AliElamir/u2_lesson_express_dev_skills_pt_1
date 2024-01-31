var express = require('express')
var router = express.Router()
const devskillsCtrl = require('../controllers/devskills')

// All actual paths start with "/devskills"

router.get('/', devskillsCtrl.index)

//Get /devskills/new - 1. identifythe route > 2. create the ui in index.ejs

router.get('/new', devskillsCtrl.newdevskill)

// Get /devskills/:id

router.get('/:id', devskillsCtrl.show)

// post /devskills

router.post('/', devskillsCtrl.create)

// DELETE /devskills/:id

router.delete('/:id', devskillsCtrl.deletedevskill)

// GET /devskills/:id/edit

router.get('/:id/edit', devskillsCtrl.editdevskill)

// PUT /devskills/:id

router.put('/:id', devskillsCtrl.updateskills)

module.exports = router
