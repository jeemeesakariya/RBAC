const express = require("express");
const router = express.Router();
const { admin, manager, user } = require("../controllers/userControllers.js")
const{authorizeRole}=require("../middlewares/roleMiddleware.js")

// only admin router
router.get("/admin",authorizeRole("admin"),admin)

// both admin and manager
router.get("/manager",authorizeRole("admin","manager"),manager)

// all can accse this routes
router.get("/user", authorizeRole("admin","manager","user"),user)

module.exports = router;