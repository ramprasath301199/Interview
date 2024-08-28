const Usermodel = require("../models/usermodel")
const Signup = async (req, res) => {
    try {
        const finduser = Usermodel.find({ Email: req.body.Email })
        if (finduser.length == 0) {
            const user = new Usermodel({
                FirstName: req.body.FirstName,
                LastName: req.body.LastName,
                Email: req.body.Email,
                Mobile: req.body.Mobile,
                Password: req.body.Password,
                Role: req.body.Role
            });
            const savedUser = await user.save();
            res.status(201).json({ message: "success" });
        } else {
            res.status(400).json({ message: "Email is Registered" });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
const getAll = async (req, res) => {
    try {
        const alluser = await Usermodel.find({})
        res.status(201).json({ user: alluser });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
const Login = async (req, res) => {
    try {
        const finduser = await Usermodel.find({ Email: req.body.email })
        if (finduser.length != 0) {
            if (finduser[0].Password == req.body.password) {
                res.status(201).json({ message: "success", user: finduser });
            } else {
                res.status(400).json({ message: "Password is Incorrect" });
            }
        } else {
            res.status(400).json({ message: "User Not found" });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
module.exports = { Signup, getAll, Login }