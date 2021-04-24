const mongoose = require('mongoose')

const rideSchema = new mongoose.Schema(
    {
        ride_by_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'ride_by',
            required: true
        },
        ride_req_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'ride_req',
            required: true
        },
        car_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'car',
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        is_amount_paid: {
            type: Boolean,
            default: false
        },
        is_ride_complete: {
            type: Boolean,
            default: false
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
)

module.exports = mongoose.model('user', rideSchema)