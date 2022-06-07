const express = require('express')
const vhost = require('vhost')
const server = express()

const clientApp = require('./app/app')
const userPages = require('./userPages/usersPages')
const api = require('./api/api')

server.use(vhost('api.localhost', api))
server.use(vhost('localhost', clientApp))
server.use(vhost('*.localhost', userPages))

server.listen(5000, () => {
 console.log('App is listening on port 5000!')
 console.log('Visit http://localhost:5000/')
})
