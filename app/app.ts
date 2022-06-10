import express from 'express'

const client = express()

client.set('view engine', 'ejs')

client.get('/', (req, res) => {
 res.render('app/index')
})

client.get('/temp1', (req, res) => {
 res.render('temp1/temp')
})

export default client
