const express = require('express')
const funcionarioControllers = require('./controllers')

const routes = express.Router({
    mergeParams: true
})

routes.get('/consultar', funcionarioControllers.consultar)
routes.post('/cadastrar', funcionarioControllers.cadastrar)
routes.put('/atualizar/:id', funcionarioControllers.atualizar)
routes.delete('/deletar/:id', funcionarioControllers.deletar)

module.exports = {routes,}