const express = require('express')
const router = express.Router()

const RegisterController = require('../controllers/RegisterController')

router.get('/add', RegisterController.createRegister)
router.post('/add', RegisterController.createRegisterPost)
router.post('/remove', RegisterController.removeRegister)
router.post('/edit', RegisterController.updateRegisterPost)
router.get('/edit/:id', RegisterController.updateRegister)
router.get('/', RegisterController.showRegister)

module.exports = router