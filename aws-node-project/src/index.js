const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const {routes: funcionarioRoutes,} = require('./funcionario/routes')

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use('/funcionario', funcionarioRoutes)

module.exports = app