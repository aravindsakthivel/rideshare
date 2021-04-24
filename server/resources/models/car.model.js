const mongoose = require('mongoose')

const carSchema = new mongoose.Schema(
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
        type: {
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

module.exports = mongoose.model('car', carSchema)