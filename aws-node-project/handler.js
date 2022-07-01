const awsServerLessExpress = require('aws-serverless-express')
const app = require('./src/index')
const server = awsServerLessExpress.createServer(app)

exports.handler = (event, context) => {
    return awsServerLessExpress.proxy(server, event, context)
}