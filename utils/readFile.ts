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
