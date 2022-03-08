const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
//const jwt = require('jsonwebtoken')
const user = require('./models/user.model')
const userRoute = require('./routes/userRoutes')
const bcrypt = require('bcryptjs')
const port = process.env.PORT || 3000
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())

mongoose
    .connect("mongodb://localhost:27017/User-login", {})
    .then(() => {
        console.log("Database Connected");
    })
    .catch(() => {
        console.log("Database Failed");
    });

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use('/', userRoute);

// app.post("/register", async (req, res) => {
//     try {
//         var data = req.body;
//         var hashedpass = await bcrypt.hash(data.password, 10)
//         data.password = hashedpass
//         console.log(data.password)
//         console.log(data.password)
//         // const token = await jwt.sign(data, process.env.SECRET_KEY)
//         // data.token = token;
//         const response = await user.create(data)
//         res.send(response)
//         console.log(response)
//     }
//     catch (err) {
//         console.log(err)
//     }
// })

app.listen(port, () => {
    console.log(`Listening at ${port}...`)
})

