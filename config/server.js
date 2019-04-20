const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')  //esse cara habilita chamada de outro serviço node do frontend
const queryParser = require('express-query-int')

server.use(bodyParser.urlencoded({ extended: true })) //USE - toda requisição passa aqui
server.use(bodyParser.json()) //tudo que for json passa para objeto da aplicação
server.use(allowCors)
server.use(queryParser())

server.listen(port, function() {
  console.log(`REST is running on port ${port}.`)
})

module.exports = server
