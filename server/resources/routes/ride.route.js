const { 
    get_all_previous_rides_taken_by_user, 
    get_all_previous_rides_by_user, 
    create_a_ride, 
    change_ride_status, 
    change_current_location, 
    get_current_ride_by_user, 
    get_current_ride_taken_by_user 
} = require('../controllers/ride.controller')

const ride_route = require('express').Router()

ride_route.post('/', create_a_ride)
ride_route.patch('/status/:id', change_ride_status)
ride_route.patch('/location/:id', change_current_location)
ride_route.get('/by/:user_id', get_current_ride_by_user)
ride_route.get('/taken/:user_id', get_current_ride_taken_by_user)
ride_route.get('/previous/by/:user_id', get_all_previous_rides_by_user)
ride_route.get('/previous/taken/:user_id', get_all_previous_rides_taken_by_user)

module.exports = ride_route