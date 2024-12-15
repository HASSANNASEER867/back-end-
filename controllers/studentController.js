const Student = require('../models/students');

signup = async (req, res) => {
  try {
    const { email, password } = req.body;
    const newStudent = new Student({ email, password });
    await newStudent.save();
    res.status(201).json({ message: 'Student created successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const student = await Student.findOne({ email });
    if (!student || student.password !== password) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    // Generate JWT token here
    res.status(200).json({ message: 'Logged in successfully', token: 'JWT_TOKEN' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

resetPassword = async (req, res) => {
  try {
    const { email, newPassword } = req.body;
    const student = await Student.findOne({ email });
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }

    student.password = newPassword;
    await student.save();
    res.status(200).json({ message: 'Password reset successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Other methods like submitTask, getGrades, getNotifications would follow similar patterns.
const generateToken = (id, role) => {
    return jwt.sign({ _id: id, role }, process.env.JWT_SECRET, { expiresIn: '1h' });
  };
  

module.exports = {
  signup,
  login,
  resetPassword,
}