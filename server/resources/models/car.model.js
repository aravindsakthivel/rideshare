const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        user_id:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user',
            required: true
        },
        name: {
            type: String,
            required: true
        },
        model: {
            type: String,
            required: true
        },
        car_type: {
            type: String,
            enum: ['MINI', 'SEDAN', 'SUV'],
            required: true
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
)

module.exports = mongoose.model('user', userSchema)