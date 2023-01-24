const mongoose = require("mongoose");
const ClientSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  img: {
    type: String,
  },
});

module.exports = mongoose.model("Client", ClientSchema);
