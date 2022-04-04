const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to db");
    app.listen(process.env.PORT || 5000 , "0.0.0.0",()=>{
        console.log(`app listening on port ${process.env.PORT || 5000}!`)
    })
  })
  .catch((e) => {
    console.log(e);
  });
