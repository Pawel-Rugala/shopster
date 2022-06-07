import express from 'express'
import cors from 'cors'
import path from 'path'
import fs from 'fs'
import { createDir, writeFile } from '../utils/files'
const router = express.Router()

router.use(cors())
router.use(express.urlencoded({ extended: true }))

router.get('/', (req, res) => {
 res.json({ msg: 'Hello API HOME' })
})

const template = `
{
 "template": "temp1",
 "pageTitle": "{{{temp.page}}}",
 "pageDescription": "{{{temp.desc}}}"
}

`

router.post('/page', (req, res) => {
 const { page, desc } = req.body

 //TODO check if page already exists
 //TODO check if page is valid
 //TODO check if desc is valid
 //TODO rename the folder name to domain name

 const txt = template
  .replace('{{{temp.page}}}', page)
  .replace('{{{temp.desc}}}', desc)

 createDir(path.join(__dirname, `../userPages/${page}`))
  .then(() => {
   return writeFile(
    path.join(__dirname, `../userPages/${page}/general.json`),
    txt
   )
  })
  .then(() => {
   res.redirect(`http://${page}.localhost:5000/`)
  })
  .catch((err) => {
   console.log(err)
  })
})

router.get('/hello', (req, res) => {
 res.json({ msg: 'Hello API' })
})

export default router
