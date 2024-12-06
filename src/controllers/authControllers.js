const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = require("../models/userModel.js")
require("dotenv").config()

const getuser =async (req,res) => {
    res.json(await User.find());
}

const register = async (req, res) => {
    try {
        const { username, password, role } = req.body;
        const hasedPassword = await bcrypt.hash(password, 9)
        await User.create({ username:username, password:hasedPassword, role:role });
        res.status(201).json({message:`sussfully created user ${username}`})
    } catch (err) {
        res.status(500).json({message:`somthing went wrong ${err}`})
    }
}


const login = async(req, res) => {
    try {
        const { username, password, } = req.body;
        const user = await User.findOne({ username });

        if (!user) res.status(404).json({ message: `user is not found` });

        const isMatch = bcrypt.compareSync(password, user.password)

        if (!isMatch) {
            return res.status(500).json({ mesage: "wrong password " })
        } 

        const token = jwt.sign(
            {
                id: user._id,
                role: user.role,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1h"
            }
        );

        return res.status(200).json({token:token})

    } catch (err) {
        return res.status(500).json({ message: `somthing went wrong ${err}` })
    }

}

module.exports={register,login,getuser}