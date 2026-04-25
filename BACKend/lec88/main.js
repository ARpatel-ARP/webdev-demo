const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send("null")
})

app.get('/about', (req, res) => {
  res.send('Hello about!')
})

app.get('/about/:slug', (req, res) => {
    console.log(req.params)
    console.log(req.query)
  res.send(`hello ${req.params.slug}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})