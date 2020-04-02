const Skill = require('../models/skill')

const index = (req, res, next) => {
  res.render('skills/index', {
    skills: Skill.getAll(),
    time: req.time
  })
}

const show = (req, res) => {
  res.render('skills/show', {
    skill: Skill.getOne(req.params.id),
    id: parseInt(req.params.id)
  })
}

const newSkill = (req, res) => {
  res.render('skills/new')
}

const create = (req, res) => {
  console.log(req.body)
  Skill.create(req.body)
  res.redirect('skills')
}

const deleteSkill = (req, res) => {
  Skill.deleteOne(req.params.id)
  res.redirect('/skills')
}

// const editToDo = (req, res) => {
//   res.render('todos/edit', {
//     todo: Todo.getOne(req.params.id)
//   })
// }

// const update = (req, res) => {
//   Todo.editOne(req.params.id)
//   res.redirect('/todos/')
// }

module.exports = {
    index,
    show, 
    newSkill,
    create, 
    deleteSkill,
    // editToDo
}