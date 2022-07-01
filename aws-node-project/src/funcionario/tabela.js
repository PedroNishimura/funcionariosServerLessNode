const AWS = require('aws-sdk')

const cliente = new AWS.DynamoDB.DocumentClient()
const tabela = 'Funcionarios'

AWS.config.update({
    region: 'us-east-1'
})

module.exports = {
    cliente,
    tabela
}