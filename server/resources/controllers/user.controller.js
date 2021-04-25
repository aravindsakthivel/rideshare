const User = require('../models/user.model')

const fast2sms = require('fast-two-sms')
const API_KEY = process.env.FAST_2_SMS_API_KEY

const get_users = async (req, res) => {
    const users = await User.find().select('-otp').lean().exec()
    return res.json({error: false, data: {users} })
}

const get_user_by_id = async (req, res) => {
    const user = await User.findById(req.params.id).select('-otp').lean().exec()
    return res.json({error: false, data: {user} })
}

const login = async (req, res) => {
    let mob = req.body.mob
    let otp = Math.floor(Math.random() * (999999 - 100000 + 1) + 100000);
    try {
        if (isNaN(+mob) && mob.length !== 10) {
            return res.json({ error: true, message: "not a valid number" })
        }
        let user_in_db = await User.findOne({ mob }).select('-otp').lean().exec()
        if (user_in_db && user_in_db.active) {
            return res.json({ error: false, data: { user: user_in_db } })
        }
        else if (user_in_db) {
            var options = { authorization: API_KEY, message: "Your OTP is: " + otp, numbers: [mob] }
            user_in_db = await User.findOneAndUpdate({ mob }, { otp }, { new: true }).select('-otp').lean().exec()
            await fast2sms.sendMessage(options)
            return res.json({ error: false, data: { user: user_in_db } })
        }
        let user = await User.create({ ...req.body, otp })
        user = user.toJSON()
        delete user["otp"]
    
        var options = { authorization: API_KEY, message: "Your OTP is: " + otp, numbers: [mob] }
        await fast2sms.sendMessage(options)
    
        return res.json({ error: false, data: { user } })
    }
    catch (err) {
        return res.status(400).json({err: `${err}`})
    }
}

const authenticate_user = async (req, res) => {
    let {otp} = req.body
    let {id} = req.params
    const updated_user = await User.findOneAndUpdate({otp, _id: id}, {active: true}, {new: true})
                                    .select('-otp')
                                    .lean()
                                    .exec()
    if(!updated_user){
        return res.json({error: true, message: "wrong otp sent"})
    }

    res.json({error: false, data: {user: updated_user} })
}

const delete_user_by_mob = async (req, res) => {
    let {mob} = req.params
    let data = await User.deleteOne({mob})
    if(data.deletedCount === 0){
        res.json({error: true, message: "user not found" })
    }
    else{
        res.json({error: false, message: "user deleted" })
    }
}


module.exports = {
    get_users,
    get_user_by_id,
    login,
    authenticate_user,
    delete_user_by_mob
}