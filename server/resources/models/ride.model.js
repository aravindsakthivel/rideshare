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
        ride_status: {
            type: String,
            enum: ['YET_TO_PICK_UP', 'STARTED', 'COMPLETED', 'CANCELED'],
            default: 'YET_TO_PICK_UP'
        },
        current_location_geo: {
            type: {
                type: String,
                enum: ["Point"],
                required: true
            },
            coordinates: {
                type: [Number],
                required: true
            }
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
)

module.exports = mongoose.model('ride', rideSchema)