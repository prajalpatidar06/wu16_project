const Url = require("../models/urls");
const { regex } = require("../utils/regex");

module.exports.short_url = async (req, res) => {
  try {
    if (!regex("url", req.body.LongUrl)) {
      return res.status(400).send({ success: false, message: "Invalid Url" });
    }
    const newUrl = new Url({
      LongUrl: req.body.LongUrl,
      CreatedBy: req.user._id,
    });
    await newUrl.save();
    res.send({ success: true, message: "Url shorten successfully", newUrl });
  } catch (err) {
    res.status(400).send({ success: false, message: err.message });
  }
};

module.exports.redirectToLongUrl = async (req, res) => {
  try {
    const UrlObject = await Url.findOne({ ShortUrl: req.params.shortUrlId });
    if (!UrlObject) {
      return res.status(400).send({ success: false, message: "Url not found" });
    }
    UrlObject.Clicks++;
    UrlObject.save();
    res.redirect(UrlObject.LongUrl);
  } catch (err) {
    res.status(400).send({ success: false, message: err.message });
  }
};

module.exports.getAllUrls = async (req, res) => {
  try {
    const urls = await Url.find({ Email: req.user.Email });
    res.send({ success: true, urls });
  } catch (err) {
    res.status(400).send({ success: false, message: err.message });
  }
};
