const express = require('express')
const router = express.Router()

router.use(express.static(`${__dirname}/dist`))

router.all('*', (req, res) => {
 res.sendFile(`${__dirname}/dist/index.html`)
})

module.exports = router
