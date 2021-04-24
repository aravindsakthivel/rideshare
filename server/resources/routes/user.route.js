const { get_users, get_user_by_id, login, authenticate_user, delete_user_by_mob } = require('../controllers/user.controller')

const user_route = require('express').Router()


user_route.get('/', get_users)
user_route.post('/login', login)
user_route.get('/:id', get_user_by_id)
user_route.delete('/:mob', delete_user_by_mob)
user_route.patch('/auth/:id', authenticate_user)

module.exports = user_route