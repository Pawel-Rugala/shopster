const express = require('express')
const app = express()

app.use((req, res, next) => {
 const hostname = req.hostname
 const client = hostname.split('.')[0]
 if (client === 'localhost') {
  req.clientUrl = null
 } else {
  req.clientUrl = client
 }
 next()
})

app.use(express.static('public'))
app.use(express.static('client/dist'))

app.get('/', (req, res) => {
 if (req.clientUrl) {
  res.sendFile(`${__dirname}/public/${req.clientUrl}/index.html`)
 } else {
  res.sendFile(`${__dirname}/client/dist/index.html`)
 }
})

app.listen(3000, () => {
 console.log('Example app listening on port 3000!')
})
