const express = require('express')
const cors = require('cors')
const router = express.Router()

router.use(cors())

router.get('/', (req, res) => {
 res.json({ msg: 'Hello API HOME' })
})

router.get('/hello', (req, res) => {
 res.json({ msg: 'Hello API' })
})

module.exports = router
