import express from 'express'
import path from 'path'

const client = express()

client.set('view engine', 'ejs')

client.get('/', (req, res) => {
 res.render('app/index')
})

client.get('/temp1', (req, res) => {
 client.use(express.static(path.join(__dirname, '../views/temp1/public/')))
 res.render('temp1/temp')
})

export default client
