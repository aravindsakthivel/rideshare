const Ride_Req = require('../models/ride_req.model')

const get_ride_req_by_id = async (req, res) => {
    const ride_req = await Ride_Req.findById(req.params.id).populate('user_id').lean().exec()
    res.json({error: false, data: {ride_req} })
}

const get_ride_req_by_user_id = async (req, res) => {
    const ride_req = await Ride_Req.findOne({user_id: req.params.user_id, is_ride_required: true}).populate('user_id').lean().exec()
    res.json({error: false, data: {ride_req} })
}

const add_a_ride_req_by_user = async (req, res) => {
    const ride_req = await Ride_Req.create(req.body)
    res.json({error: false, data: {ride_req} })
}

const cancel_ride_req = async (req, res) => {
    const ride_req = await Ride_Req.findByIdAndUpdate(req.params.id, {is_ride_required: false}, {new: true})
    res.json({error: false, data: {ride_req} })
}

module.exports = {
    get_ride_req_by_id,
    get_ride_req_by_user_id,
    add_a_ride_req_by_user,
    cancel_ride_req
}