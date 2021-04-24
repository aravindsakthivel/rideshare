const { get_ride_by_id, get_active_rides_by_user, add_a_ride_by_user, get_all_rides_by_radius, make_ride_unavailable } = require('../controllers/ride_by.controller')

const ride_by_route = require('express').Router()

ride_by_route.post('/', add_a_ride_by_user)
ride_by_route.get('/:id', get_ride_by_id)
ride_by_route.patch('/unavailable/:id', make_ride_unavailable)
ride_by_route.post('/radius', get_all_rides_by_radius)
ride_by_route.get('/user/:user_id', get_active_rides_by_user)

module.exports = ride_by_route