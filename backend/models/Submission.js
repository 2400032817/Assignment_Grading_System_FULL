
const mongoose = require("mongoose");

const SubmissionSchema = new mongoose.Schema({
  assignmentId:String,
  studentId:String,
  file:String,
  grade:String,
  feedback:String
});

module.exports = mongoose.model("Submission",SubmissionSchema);
