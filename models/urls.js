const mongoose = require("mongoose");
const shortid = require("shortid");

const UrlSchema = new mongoose.Schema(
  {
    CreatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    LongUrl: { type: String, required: true },
    ShortUrl: { type: String, required: true, default: shortid.generate },
    Clicks: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Url = mongoose.model("Url", UrlSchema);
module.exports = Url;
