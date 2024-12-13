const Teacher = require('../Models/Teacher');
const Section = require('../models/Section');

exports.signup = async (req, res) => {
  try {
    const { email, password } = req.body;
    const newTeacher = new Teacher({ email, password });
    await newTeacher.save();
    res.status(201).json({ message: 'Teacher created successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Other methods like login, assignTask, getTaskSubmissions, gradeTask, getMonthlyReport, sendNotification would follow similar patterns.

const generateToken = (id, role) => {
    return jwt.sign({ _id: id, role }, process.env.JWT_SECRET, { expiresIn: '1h' });
  };
  