const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let sitename = "Adidas"
    let searchtext = "search-now"
    let arr = ["kurmis", "jaiswar", 35]
  res.render("index.ejs", {sitename: sitename, searchtext: searchtext, arr})
})

app.get('/blog/:slug', (req, res) => {
    let blogtitle = "adidas why and when?"
    let blogcontent = "an emerging brand"
  res.render("blogpost", {blogtitle: blogtitle, blogcontent: blogcontent})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
