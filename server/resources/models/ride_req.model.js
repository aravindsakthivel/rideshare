const mongoose = require('mongoose')

const rideReqSchema = new mongoose.Schema(
    {
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user',
            required: true
        },
        current_location: {
            type: String,
            required: true
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
        },
        destination: {
            type: String,
            required: true
        },
        destination_geo: {
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

module.exports = mongoose.model('ride_req', rideReqSchema)