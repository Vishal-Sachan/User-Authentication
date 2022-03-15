const mongoose = require('mongoose')

const educationSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true
    },
    //i=intermediate
    iSchool: {
        type: String
    },
    iBranch: {
        type: String
    },
    iBoard: {
        type: String
    },
    iYear: {
        type: Number
    },
    //ug=under graduation
    ugUniversity: {
        type: String
    },
    ugCourse: {
        type: String
    },
    ugBranch: {
        type: String
    },
    ugYear: {
        type: Number
    }
})

module.exports = mongoose.model("user-education", educationSchema);