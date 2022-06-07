const express = require('express')
const userPages = express()
const fs = require('fs')
const path = require('path')
const { readFile } = require('../utils/readFile')

userPages.set('view engine', 'ejs')

userPages.use((req, res, next) => {
 const what = req.hostname.replace('www', '').split('.')[0]
 if (what !== 'api') {
  req.what = what
 }
 next()
})

userPages.get('/', (req, res) => {
 readFile(path.join(__dirname, `./${req.what}/general.json`))
  .then((data) => {
   return JSON.parse(data)
  })
  .then((data) => {
   res.render(`${data.template}/index`, {
    data,
   })
  })
  .catch((err) => {
   console.log(err)
  })
})

module.exports = userPages
