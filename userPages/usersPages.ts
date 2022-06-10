import express, { NextFunction } from 'express'
import path from 'path'
import type { Request } from 'express'
import { readFile } from '../utils/files'
import { IUserFile } from '../types'

const userPages = express()

userPages.set('view engine', 'ejs')

userPages.use((req, res, next) => {
 const what = req.hostname.replace('www', '').split('.')[0]
 if (what !== 'api') {
  req.what = what
 }
 next()
})

userPages.get('/', (req, res) => {
 const { what } = req
 readFile(path.join(__dirname, `./${what}/general.json`))
  .then((data) => {
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
