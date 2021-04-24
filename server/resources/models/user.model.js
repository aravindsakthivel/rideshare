const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        mob: {
            type: String,
            required: true
        },
        active: {
            type: Boolean,
            default: false
        },
        otp: Number
    },
    {
        versionKey: false,
        timestamps: true
    }
)

module.exports = mongoose.model('user', userSchema)