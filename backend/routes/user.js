const express = require("express");
const router = express.Router();
const { Signup, getAll, Login } = require("../controllers/auth")
router.post("/signup", Signup)
router.get("/getallusers", getAll)
router.post("/login", Login)
module.exports = router;