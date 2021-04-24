const { get_users, get_user_by_id, create_user } = require('../controllers/user.controller')

const user_route = require('express').Router()


user_route.get('/', get_users)
user_route.post('/', create_user)
user_route.get('/:id', get_user_by_id)

module.exports = user_route