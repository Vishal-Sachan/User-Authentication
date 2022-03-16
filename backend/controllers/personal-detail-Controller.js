const Details = require('../models/personal-details.model')

const ViewDetail = async (req, res, next) => {
    try {
        console.log(req.body)
        const { email } = req.body
        const response = await Details.findOne({ email })
        console.log(response)
        res.json({
            data: response
        })
    } catch (err) {
        // console.log(err)
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