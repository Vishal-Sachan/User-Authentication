const Details = require('../models/personal-details.model')

const ViewDetail = async (req, res, next) => {
    try {
        const email = req.params.email
        console.log(email)
        const response = await Details.findOne({ email })
        res.json({
            data: response
        })
    } catch (err) {
        res.json({
            message: "no personal data available"
        })
    }
}

const AddDetail = async (req, res, next) => { }

const UpdateDetail = async (req, res, next) => { }

const DeleteDetail = async (req, res, next) => { }

module.exports = {
    ViewDetail,
    AddDetail,
    UpdateDetail,
    DeleteDetail
}