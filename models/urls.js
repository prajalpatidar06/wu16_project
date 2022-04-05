const mongoose = require("mongoose");
const UrlSchema = new mongoose.Schema(
  {
    CreatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    LongUrl: { type: String, required: true },
    ShortUrl: { type: String, required: true },
  },
  { timestamps: true }
);

const Url = mongoose.model("Url", UrlSchema);
module.exports = Url;
