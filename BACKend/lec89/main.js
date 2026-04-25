const express = require('express')
const blog = require('./routes/blog')



const app = express()
const port = 3000

app.use(express.static("public"))
app.use('/blog', blog)

app.get('/', (req, res) => {
  console.log("get request")
  res.send('Hello World88!')
})

app.post('/', (req, res) => {
    console.log("post request")
  res.send('Hello Worldpostit!')
})

app.get("/about", (req, res) => {
    console.log("about")
  res.sendFile('templates/about.html', {root:__dirname})
})

app.get("/api", (req, res) => {
    console.log("about")
  res.json({a: 1, b:2, c:3})
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
