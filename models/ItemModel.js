var mongoose = require("mongoose");
var Schema   = mongoose.Schema;

var itemSchema = new Schema({
  name: {type: String, required: true},
  quantity: {type: Number, required: true}
});

module.exports = mongoose.model("Item", itemSchema);
