const { get_all_cars_by_user_id, get_car_by_id, add_car, get_all_cars_by_type } = require('../controllers/car.controller')

const car_route = require('express').Router()

car_route.post('/', add_car)
car_route.get('/:id', get_car_by_id)
car_route.get('/type/:type', get_all_cars_by_type)
car_route.get('/by_user/:user_id', get_all_cars_by_user_id)

module.exports = car_route