const express = require("express");
const router = express.Router();
const users_controller = require("../controllers/users_controllers");
const authUser = require("../middlewares/auth");

router.post("/signup", users_controller.sign_up);
router.post("/signin", users_controller.sign_in);
router.get("/", authUser, users_controller.me);
module.exports = router;
