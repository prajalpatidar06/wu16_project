const express = require("express");
const router = express.Router();

router.use("/users", require("./users"));
router.use("/api", require("./urls"));
router.use("/", (req, res) => {
  res.send(
    "<h1>Welcome to URL-SHORTNER</h1><p>WU-16 Project made by Prajal Patidar</p>"
  );
});

module.exports = router;
