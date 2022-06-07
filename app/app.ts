import express from 'express'

const client = express()

client.set('view engine', 'ejs')

client.get('/', (req, res) => {
 res.render('app/index')
})

export default client
