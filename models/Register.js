const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Register = db.define('Register', {
    name: {
        type: DataTypes.STRING,
        required: true
    },
    cep: {
        type: DataTypes.STRING,
        required: true
    },
    state: {
        type: DataTypes.STRING,
        required: true
    },
    city: {
        type: DataTypes.STRING,
        required: true
    },
    address: {
        type: DataTypes.STRING,
        required: true
    },
})

module.exports = Register