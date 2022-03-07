const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const port = process.env.PORT || 3000
const app = express()

app.use(bodyParser.json())
app.use(express.urlencoded)
app.use(express.json())

mongoose
    .connect("mongodb://localhost:27017/User-login", {})
    .then(() => {
        console.log("Database Connected");
    })
    .catch(() => {
        console.log("Database Failed");
    });



app.listen(port, () => {
    console.log(`Listening at ${port}...`)
})

