const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const personSchema = new Schema({
  name: String,
  image: String,
  title: String,
});

module.exports = mongoose.model("Person", personSchema);
