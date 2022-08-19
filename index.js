const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const connection = require('./db/conn')

const registerRoutes = require('./routes/registerRoutes')

const Register = require('./models/Register')


app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.use(express.static('public'))

app.use('/register', registerRoutes)

connection
    .sync()
    .then(() => {
        app.listen(3000)
    })
    .catch((err) => console.log(err))