import express from 'express'
import vhost from 'vhost'
import userPages from './userPages/usersPages'
import api from './api/api'
import clientApp from './app/app'

const server = express()

server.use(vhost('api.localhost', api))
server.use(vhost('localhost', clientApp))
server.use(vhost('*.localhost', userPages))

server.listen(5000, () => {
 console.log('App is listening on port 5000!')
 console.log('Visit http://localhost:5000/')
})
