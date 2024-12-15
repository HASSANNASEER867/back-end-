const mongoose = require('mongoose');

const sectionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  day: { type: String, required: true },
  timeZone: { type: String, required: true },
  technology: { type: String, required: true },
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }],
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher' }
});

module.exports = mongoose.model('Section', sectionSchema);
