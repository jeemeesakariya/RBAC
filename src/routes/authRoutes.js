const express = require("express");
const router = express.Router();
const {register,login,getuser}=require("../controllers/authControllers.js")

router.get("/", getuser);
router.post("/register", register);
router.post("/login", login);

module.exports = router;