const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userName: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    }
})

const User = mongoose.model("registered-users", userSchema);
module.exports = User 