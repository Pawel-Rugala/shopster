import express from 'express'
import path from 'path'
import type { Request } from 'express'
import { readFile } from '../utils/files'
import { IUserFile } from '../types'

const userPages = express()

type RequestExtended = Request & { what: string }

userPages.set('view engine', 'ejs')

userPages.use((req: RequestExtended, res, next) => {
 const what = req.hostname.replace('www', '').split('.')[0]
 if (what !== 'api') {
  req.what = what
 }
 next()
})

userPages.get('/', (req: RequestExtended, res) => {
 readFile(path.join(__dirname, `./${req.what}/general.json`))
  .then((data: string) => {
   return JSON.parse(data)
  })
  .then((data: IUserFile) => {
   res.render(`${data.template}/index`, {
    data,
   })
  })
  .catch((err) => {
   console.log(err)
  })
})

export default userPages
