const mongoose = require('mongoose')

const rideBySchema = new mongoose.Schema(
    {
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user',
            required: true
        },
        is_ride_available: {
            type: Boolean,
            default: true
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
        },
        price_per_km:{
            type: Number,
            required: true
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
)

module.exports = mongoose.model('ride_by', rideBySchema)