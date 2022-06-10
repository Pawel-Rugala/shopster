import express from 'express'
import cors from 'cors'
import path from 'path'
import { createDir, writeFile, checkDir } from '../utils/files'
const router = express.Router()

router.use(cors())
router.use(express.urlencoded({ extended: true }))
router.use(express.json())

router.get('/', (req, res) => {
 res.json({ msg: 'Hello API HOME' })
})

const template = `
{
 "template": "temp1",
 "domain": "{{{temp.domain}}}",
 "pageTitle": "{{{temp.page}}}",
 "pageDescription": "{{{temp.desc}}}"
}

`

router.post('/page', (req, res) => {
 try {
  const { page, desc, domain } = req.body
  const domainName: string = domain.split('.')[0]
  const txt = template
   .replace('{{{temp.page}}}', page)
   .replace('{{{temp.desc}}}', desc)
   .replace('{{{temp.domain}}}', domainName)

  createDir(path.join(__dirname, `../userPages/${domainName}`))
   .then(() => {
    return writeFile(
     path.join(__dirname, `../userPages/${domainName}/general.json`),
     txt
    )
   })
   .then(() => {
    res.redirect(`http://${domainName}.localhost:5000/`)
   })
   .catch((err) => {
    console.log(err)
   })
 } catch (error) {
  res.status(500).json({ error })
 }
})

router.post('/page-check', async (req, res) => {
 const { page } = req.body
 console.log(page)
 checkDir(path.join(__dirname, `../userPages/${page}`))
  .then((check) => {
   console.log(check)
   res.json({ check })
  })
  .catch((err) => {
   res.json({ check: false })
  })
})

router.get('/hello', (req, res) => {
 res.json({ msg: 'Hello API' })
})

export default router
