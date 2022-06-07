const express = require('express')
const vhost = require('vhost')
const server = express()
const api = require('./api/index')
const client = require('./client/index')
const app = require('./app/app')

server.use(vhost('api.localhost', api))
server.use(vhost('localhost', app))
server.use(vhost('*.localhost', client))

server.listen(5000, () => {
 console.log('Example app listening on port 5000!')
})
