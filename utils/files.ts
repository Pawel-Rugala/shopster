import fs from 'fs'

export const readFile = (filePath: string) => {
 return new Promise((resolve, reject) => {
  fs.readFile(filePath, (err, data) => {
   if (err) {
    reject(err)
   } else {
    resolve(data)
   }
  })
 })
}

export const createDir = (dirPath: string) => {
 return new Promise((resolve, reject) => {
  fs.mkdir(dirPath, (err) => {
   if (err) {
    reject(err)
   } else {
    resolve('ok')
   }
  })
 })
}

export const writeFile = (filePath: string, data: string) => {
 return new Promise((resolve, reject) => {
  fs.writeFile(filePath, data, (err) => {
   if (err) {
    reject(err)
   } else {
    resolve('ok')
   }
  })
 })
}
