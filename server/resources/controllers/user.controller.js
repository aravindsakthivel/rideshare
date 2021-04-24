const User = require('../controllers/user.controller')


const get_users = async (req, res) => {
    const users = await User.find().lean().exec()
    res.json({error: false, data: {users} })
}

const get_user_by_id = async (req, res) => {
    const user = await User.findById(req.body.id).lean().exec()
    res.json({error: false, data: {user} })
}

const create_user = async (req, res) => {
    const user = await User.create(req.body)
    res.json({error: false, data: {user} })
}

const delete_user = async (req, res) => {
    // const User = await User.findOne
}


module.exports = {
    get_users,
    get_user_by_id,
    create_user
}