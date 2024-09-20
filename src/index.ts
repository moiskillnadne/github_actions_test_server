import express from 'express'

const app = express()

app.get('/hello', (req, res) => {
  res.send('Hello world. Deploy to VPS')
})

app.listen(3000, () => {
  console.log(`Server listen 3000 port`)
})