const Ride_By = require('../models/ride_by.model')

const get_active_rides_by_user = async (req, res) => {
    const rides = await Ride_By.find({user_id: req.params.user_id, is_ride_available: true}).populate('user_id').lean().exec()
    res.json({error: false, data: {rides} })
}

const get_ride_by_id = async (req, res) => {
    const ride = await Ride_By.findById(req.params.id).populate('user_id').lean().exec()
    res.json({error: false, data: {ride} })
}

const get_all_active_rides = async (req, res) => {
    const rides = await Ride_By.find({is_ride_available: true}).populate('user_id').lean().exec()
    res.json({error: false, data: {rides} })
}

const add_a_ride_by_user = async (req, res) => {
    try{
        const ride = await Ride_By.create(req.body);
        res.json({ error: false, data: { ride } });
    }catch (err) {
        res.status(400).json({
            err: `${err}`
        })
    }
}

const get_all_rides_by_radius = async (req, res) => {
    let {radius, coordinates} = req.body
    radius = radius || 5
    let rides = await Ride_By.find({
        current_location_geo: {
            $geoWithin: {
                $centerSphere: [coordinates, radius / 6371]
            }
        },
        is_ride_available: true
    })
    res.json({error: false, data: {rides} })
}

const get_all_rides_by_radius_to_destination = async (req, res) => {
    let {radius, coordinates, destination} = req.body
    radius = radius || 5
    let rides = await Ride_By.find({
        current_location_geo: {
            $geoWithin: {
                $centerSphere: [coordinates, radius / 6371]
            }
        },
        is_ride_available: true,
        destination
    })
    res.json({error: false, data: {rides} })
}

const make_ride_unavailable = async (req, res) => {
    let {id} = req.params
    let ride = await Ride_By.findByIdAndUpdate(id, {is_ride_available: false}, {new: true})
    res.json({error: false, data: {ride} })
}

module.exports = {
    get_active_rides_by_user,
    get_ride_by_id,
    add_a_ride_by_user,
    get_all_rides_by_radius,
    make_ride_unavailable,
    get_all_rides_by_radius_to_destination,
    get_all_active_rides
}