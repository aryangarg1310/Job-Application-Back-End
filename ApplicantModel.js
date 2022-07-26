const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ApplicantSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  contactInfo: {
    phone: { type: Number, required: true },
    email: { type: String, required: true },
  },
  qualifications: {
    type: Array,
    required: true,
  },
  coverLetter: {
    type: String,
    required: true,
  },
  availability: {
    type: Boolean,
    required: true,
  },
  assessment: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const ApplicantModel = mongoose.model("applicants", ApplicantSchema);
module.exports = ApplicantModel;
