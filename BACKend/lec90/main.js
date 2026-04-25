const express = require('express')
const app = express()
const port = 3000

// app.use(express.static("public"))

 app.use((req, res, next)=> {
  console.log(`${Date.now()} is a ${req.method}`)
  next()
})

 app.use((req, res, next)=> {
  console.log('middleware2')
  next()
})


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('Hello World!')
})

app.get('/contact', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
