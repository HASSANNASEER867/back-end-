const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['TEACHER'], default: 'TEACHER' },
  sections: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Section' }]
});

module.exports = mongoose.model('Teacher', teacherSchema);
