const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  class: String,
  attendance: Number,
  study_hours: Number,
});

module.exports = mongoose.model('Student', StudentSchema);