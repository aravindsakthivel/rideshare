const Ride = require('../models/ride.model')
const Ride_req = require('../models/ride_req.model')

const get_all_previous_rides_taken_by_user = async (req, res) => {
    const rides = await Ride.find({
        ride_req_id: req.params.user_id, 
        ride_status: {
            $in: ['COMPLETED', 'CANCELED']
        }
    }).populate('ride_by_id').populate('ride_req_id').populate('car_id').lean().exec()
    res.json({error: false, data: {rides} })
}

const get_all_previous_rides_by_user = async (req, res) => {
    const rides = await Ride.find({
        ride_by_id: req.params.user_id, 
        ride_status: {
            $in: ['COMPLETED', 'CANCELED']
        }
    }).populate('ride_by_id').populate('ride_req_id').populate('car_id').lean().exec()
    res.json({error: false, data: {rides} })
}

const get_current_ride_by_user = async (req, res) => {
    console.log(req.params.user_id)
    const ride = await Ride.findOne({
        ride_by_id: req.params.user_id, 
        ride_status: {
            $in: ['YET_TO_PICK_UP', 'STARTED']
        }
    }).populate('ride_by_id').populate('ride_req_id').populate('car_id').lean().exec()
    res.json({error: false, data: {ride} })
}

const get_current_ride_taken_by_user = async (req, res) => {
    const ride = await Ride.findOne({
        ride_by_id: req.params.user_id, 
        ride_status: {
            $in: ['YET_TO_PICK_UP', 'STARTED']
        }
    }).populate('ride_by_id').populate('ride_req_id').populate('car_id').lean().exec()
    res.json({error: false, data: {ride} })
}

const get_ride_by_id = async (req, res) => {
    const ride = await Ride.findById(req.params.id).populate('ride_by_id').populate('ride_req_id').populate('car_id').lean().exec()
    res.json({error: false, data: {ride} })
}

const change_current_location = async (req, res) => {
    const {coordinates} = req.body
    const ride = await Ride.findByIdAndUpdate(req.params.id, {
                                                        current_location_geo: {
                                                            type : "Point", coordinates
                                                        } 
                                                    }, {new: true})
                            .populate('ride_by_id')
                            .populate('ride_req_id')
                            .populate('car_id')
                            .lean()
                            .exec()
    res.json({error: false, data: {ride} })
}

const change_ride_status = async (req, res) => {
    const {ride_status} = req.body
    const ride = await Ride.findByIdAndUpdate(req.params.id, {ride_status}, {new: true})
                            .populate('ride_by_id')
                            .populate('ride_req_id')
                            .populate('car_id')
                            .lean()
                            .exec()
    res.json({error: false, data: {ride} })
}

const create_a_ride = async (req, res) => {
    let {ride_req_id} = req.body
    const ride_taken_by = await Ride_req.findById(ride_req_id).lean().exec()
    const current_location_geo = ride_taken_by.current_location_geo
    const ride = await Ride.create({...req.body, current_location_geo})
    res.json({error: false, data: {ride} })
}

module.exports = {
    get_all_previous_rides_taken_by_user,
    get_all_previous_rides_by_user,
    change_current_location,
    change_ride_status,
    create_a_ride,
    get_current_ride_by_user,
    get_current_ride_taken_by_user,
    get_ride_by_id
}