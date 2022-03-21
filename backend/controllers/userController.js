const User = require('../models/user-login.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const SECRET_KEY = "hitheremynameisvishalsachananiamfromkanpur"

const createJwtToken = (id) => {
    return jwt.sign({ id }, SECRET_KEY, { expiresIn: '1d' })
}

const registerUser = async (req, res, next) => {
    const { userName, contact, email, password } = req.body;
    const salt = await bcrypt.genSalt(10)
    const hashedpass = await bcrypt.hash(password, salt)
    const userAlreadyExists = await User.findOne({ email })
    if (userAlreadyExists) {
        return res.json({
            message: "This Email is already Registered"
        })
    }
    const createdUser = await User.create({ userName, contact, email, password: hashedpass });
    if (createdUser) {
        res.json({
            message: 'Registered',
        })
    }
    else {
        res.json({
            message: 'Unable to Register User'
        })
    }
}
const loginUser = async (req, res, next) => {
    const { email, password } = req.body;
    const userExists = await User.findOne({ email })
    if (!userExists) {
        return res.status(201).json({
            message: 'This User is not Registered',
        })
    }
    if (await bcrypt.compare(password, userExists.password)) {
        res.status(201).json({
            message: 'Login Sucessfull',
            token: createJwtToken(userExists._id),
            user: userExists
        })
    }
    else {
        res.status(201).json({
            message: 'Password Incorrect',
        })
    }
}

const tokenValidate = async (req, res, next) => {
    const token = req.body.token
    // console.log(token)
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (decoded) {
            return res.status(201).json({
                token: createJwtToken(decoded._id)
            })
        }
    })
}

module.exports = {
    registerUser,
    loginUser,
    tokenValidate
}