const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
 res.send('Hello API HOME')
})

router.get('/hello', (req, res) => {
 res.json({ msg: 'Hello API' })
})

module.exports = router
