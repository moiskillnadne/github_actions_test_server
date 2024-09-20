import express from 'express'

const app = express()

app.get('/hello', (req, res) => {
  res.send('Hello world')
})

app.listen(3000, () => {
  console.log(`Server listen 3000 port`)
})