const { add_a_ride_req_by_user, get_ride_req_by_id, get_ride_req_by_user_id, cancel_ride_req } = require('../controllers/ride_req.controller')

const ride_req_route = require('express').Router()

ride_req_route.post('/', add_a_ride_req_by_user)
ride_req_route.get('/:id', get_ride_req_by_id)
ride_req_route.patch('/cancel/:id', cancel_ride_req)
ride_req_route.get('/user/:user_id', get_ride_req_by_user_id)

module.exports = ride_req_route