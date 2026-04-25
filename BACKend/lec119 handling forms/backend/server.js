const express = require('express')
import cors from 'cors' 
const { default: App } = require('../src/App')
const app = express()
const port = 3000

App.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
    console.log(req.body)
  console.log(req.form)
})