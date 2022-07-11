const express = require('express')
const app = express()

app.get("/", (req, res) => {
  console.log('Here')
  res.send("hello world!")
})

app.listen(8080)