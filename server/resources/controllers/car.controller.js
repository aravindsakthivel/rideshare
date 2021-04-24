const Car = require('../models/car.model')

const get_all_cars_by_user_id = async (req, res) => {
    let {user_id} = req.params
    let cars = await Car.find({user_id}).populate('user_id').lean().exec()
    res.json({error: false, data: {cars} })
}

const get_all_cars_by_type = async (req, res) => {
    let {type} = req.params
    let cars = await Car.find({type}).populate('user_id').lean().exec()
    res.json({error: false, data: {cars} })
}

const get_car_by_id = async (req, res) => {
    let {id} = req.body
    let car = await Car.findById(id).populate('user_id').lean().exec()
    res.json({error: false, data: {car} })
}

const add_car = async (req, res) => {
    let car = await Car.create({...req.body})
    res.json({ error: false, data: {car} })
}

module.exports = {
    get_all_cars_by_user_id,
    get_all_cars_by_type,
    get_car_by_id,
    add_car
}