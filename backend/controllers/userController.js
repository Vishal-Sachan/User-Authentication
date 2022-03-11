const User = require('../models/user.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const SECRET_KEY = "hitheremynameisvishalsachananiamfromkanpur"

const createJwtToken = (userName, contact, email) => {
    return jwt.sign({ userName, contact, email }, SECRET_KEY, { expiresIn: "2d" });
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
    const token = createJwtToken({ userName, contact, email })
    const createdUser = await User.create({ userName, contact, email, password: hashedpass, token });
    if (createdUser) {
        const { userName, contact, email, token } = createdUser
        //console.log(createdUser)
        res.json({
            message: 'Registered',
            userName,
            contact,
            email,
            token
        })
    }
    else {
        res.json({
            message: 'Unable to Register User'
        })
    }
}

const loginUser = async (req, res, next) => {
    const { email, token, password } = req.body;
    const userExists = await User.findOne({ email })
    if (userExists) {
        const correctPass = await bcrypt.compare(password, userExists.password)
        //console.log(correctPass)
        if (correctPass) {
            const { userName, contact, email } = userExists
            jwt.verify(token, SECRET_KEY, (err, decoded) => {
                if (err) {
                    const newToken = createJwtToken({ userName, contact, email })
                    const updatedUser = User.updateOne({ email: email }, { $set: { token: newToken } })
                    //console.log(updatedUser.acknowledged)
                    if (updatedUser.acknowledged) {
                        sessionStorage.setItem('token', newToken)
                        return res.status(201).json({
                            message: 'Token has Expired new token Generated',
                            isLogin: true
                        })
                    }
                }
                res.status(201).json({
                    decoded: decoded,
                    isLogin: true
                })
            })
        }
        else {
            res.status(201).json({
                message: 'Password Incorrect',
                isLogin: false
            })
        }
    }
    else {
        res.status(201).json({
            message: 'This User is not Registered',
            isLogin: false
        })
    }
}

module.exports = {
    registerUser,
    loginUser
}