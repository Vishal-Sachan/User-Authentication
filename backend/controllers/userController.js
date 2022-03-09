const User = require('../models/user.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const createJwtToken = (userName, contact, email) => {
    return jwt.sign({ userName, contact, email }, process.env.SECRET_KEY, { expiresIn: "2d" });
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
    const { Email, token } = req.body;
    const userExists = await User.findOne({ Email })
    const { userName, contact, email } = userExists
    if (userExists) {
        jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
            if (err) {
                const newToken = createJwtToken({ userName, contact, email })
                const updatedUser = User.updateOne({ email: email }, { $set: { token: newToken } })
                //console.log(updatedUser.acknowledged)
                if (updatedUser.acknowledged) {
                    return res.json({
                        message: 'Token has Expired new token Generated',
                        token: newToken
                    })
                }
            }
            return res.json({
                sucess: true
            })
        })
    }
    return res.json({
        message: 'User not Registered'
    })
}

module.exports = {
    registerUser,
    loginUser
}