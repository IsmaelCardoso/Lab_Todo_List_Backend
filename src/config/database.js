require("dotenv").config();

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

require("dotenv");

module.exports = mongoose.connect(process.env.MONGO_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});
