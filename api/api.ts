import express from 'express'
import cors from 'cors'
const router = express.Router()

router.use(cors())

router.get('/', (req, res) => {
 res.json({ msg: 'Hello API HOME' })
})

router.get('/hello', (req, res) => {
 res.json({ msg: 'Hello API' })
})

export default router
