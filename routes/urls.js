const express = require("express");
const router = express.Router();
const urls_controller = require("../controllers/urls_controller");
const authUser = require("../middlewares/auth");

router.post("/", authUser, urls_controller.short_url);
router.get("/:shortUrlId", urls_controller.redirectToLongUrl);
router.get("/", authUser, urls_controller.getAllUrls);

module.exports = router;
