var express = require('express')
var router = express.Router()

const skillsCtrl = require('../controllers/skills')
router.get('/', skillsCtrl.index)
router.get('/new',skillsCtrl.newSkill)
router.get('/:id', skillsCtrl.show)
// router.get('/:id/edit', skillsCtrl.editSkill)

router.post('/', skillsCtrl.create)
router.delete('/:id', skillsCtrl.deleteSkill)
// router.edit('/:id/edit', todosCtrl.update)

module.exports = router
