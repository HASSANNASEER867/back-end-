const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['STUDENT'], default: 'STUDENT' },
  section: { type: mongoose.Schema.Types.ObjectId, ref: 'Section' }
});

module.exports = mongoose.model('Student', studentSchema);
