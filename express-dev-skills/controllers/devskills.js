const Devskill = require('../models/devskill')
const { response } = require('../server')

const index = (req, res) => {
  const devskills = Devskill.getAll()
  res.render('devskills/index', {
    devskills
  })
}

const show = (req, res) => {
  const devskill = Devskill.getOne(req.params.id)
  res.render('devskills/show', {
    devskill
  })
}

const newdevskill = (req, res) => {
  res.render('devskills/new')
}

const create = (req, res) => {
  Devskill.create(req.body)
  res.redirect('/devskills')
}

const deletedevskill = (req, res) => {
  Devskill.deleteOne(req.params.id)
  res.redirect('/devskills')
}

const editdevskill = (req, res) => {
  const devskill = Devskill.getOne(req.params.id)
  res.render('devskills/edit', {
    devskill
  })
}

const updateskills = (req, res) => {
  let devskillId = req.params.id
  let updateDevskill = req.body.devskill
  Devskill.updateOne(devskillId, updateDevskill)
  res.redirect('/devskills')
}

module.exports = {
  index,
  show,
  newdevskill,
  create,
  deletedevskill,
  editdevskill,
  updateskills
}
