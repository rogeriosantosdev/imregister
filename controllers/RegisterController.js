const Register = require('../models/Register')

module.exports = class RegisterController {
    static createRegister(req, res) {
        res.render('register/create')
    }

    static async createRegisterPost(req, res) {
        const register = {
            name: req.body.name,
            cep: req.body.cep,
            state: req.body.state,
            city: req.body.city,
            address: req.body.address
        }

        await Register.create(register)

        res.redirect('/register')
    }

    static async removeRegister(req, res) {
        const id = req.body.id

        await Register.destroy({ where: { id: id } })

        res.redirect('/register')
    }

    static async updateRegister(req, res) {
        const id = req.params.id

        const register = await Register.findOne({ where: { id: id }, raw: true })
        res.render('register/edit', { register })
    }

    static async updateRegisterPost(req, res) {
        const id = req.body.id

        const register = {
            name: req.body.name,
            cep: req.body.cep,
            state: req.body.state,
            city: req.body.city,
            address: req.body.address
        }

        await Register.update(register, { where: { id: id } })

        res.redirect('/register')
    }

    static async showRegister(req, res) {
        const register = await Register.findAll({ raw: true })

        res.render('register/all', { register })
    }
}