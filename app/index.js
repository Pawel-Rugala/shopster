const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
 res.send('App home')
})

router.get('/hello', (req, res) => {
 res.json({ msg: 'Hello App' })
})

module.exports = router
