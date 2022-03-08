const User = require('../models/user.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const createJwtToken = (id) => {
    return jwt.sign({ id }, process.env.SECRET_KEY, { expiresIn: "10d" });
}

const registerUser = async (req, res, next) => {
    const { userName, contact, email, password } = req.body;
    const salt = await bcrypt.genSalt(10)
    const hashedpass = await bcrypt.hash(password, salt)
    const userAlreadyExists = await User.findOne({ email })
    if (userAlreadyExists) {
        res.status(400).json({
            message: 'User Already Exists'
        })
    }
    const createdUser = await User.create({ userName, contact, email, password: hashedpass });
    if (createdUser) {
        res.status(201).json({
            message: 'Registered'
        })
    }
    else {
        res.status(400).json({
            message: 'Unable to Register User'
        })
    }
}

const loginUser = async (req, res, next) => {
    const { email, password } = req.body;
    const userExists = await User.findOne({ email })
    if (!userExists) {
        res.status(400).json({
            message: 'User not found'
        })
    }
    if (await bcrypt.compare(password, userExists.password)) {
        res.status(200).json({
            message: 'Logged in Sucessfull',
            token: createJwtToken(userExists._id)
        })
    }
}

module.exports = {
    registerUser,
    loginUser
}