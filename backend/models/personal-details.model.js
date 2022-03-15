const mongoose = require('mongoose')

const detailSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    dob: {
        type: Number,
    },
    gender: {
        type: String,
    },
    contact: {
        type: Number,
    },
    address: {
        type: String,
    },
    postalCode: {
        type: Number,
    },
    maritalStatus: {
        type: String,
    }
})

module.exports = mongoose.model("user-detail", detailSchema);