const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('register', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

try{
    sequelize.authenticate()
    console.log('Conectado ao mysql!')
} catch (err){
    console.log('Não foi possível conectar: ',err)
}

module.exports = sequelize