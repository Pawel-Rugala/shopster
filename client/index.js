const express = require('express')
const router = express.Router()

router.use(express.static(`${__dirname}/public`))

router.use((req, res, next) => {
 const what = req.hostname.replace('www', '').split('.')[0]
 req.what = what
 next()
})

router.get('/', (req, res) => {
 res.sendFile(`${__dirname}/public/${req.what}/index.html`)
})

router.get('/hello', (req, res) => {
 res.json({ msg: 'Hello Client' })
})

module.exports = router
