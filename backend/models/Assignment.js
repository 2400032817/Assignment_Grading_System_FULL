
const mongoose = require("mongoose");

const AssignmentSchema = new mongoose.Schema({
  title:String,
  description:String,
  deadline:Date,
  createdBy:String
});

module.exports = mongoose.model("Assignment",AssignmentSchema);
