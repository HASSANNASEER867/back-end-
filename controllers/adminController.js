const Admin = require('../models/admin');
const Section = require('../models/sections');

const signup = async (req, res) => {
  try {
    const { email, password } = req.body;
    const newAdmin = new Admin({ email, password });
    await newAdmin.save();
    res.status(201).json({ message: 'Admin created successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });
    if (!admin || admin.password !== password) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    // Generate JWT token here
    res.status(200).json({ message: 'Logged in successfully', token: 'JWT_TOKEN' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createSection = async (req, res) => {
  try {
    const { name, day, timeZone, technology } = req.body;
    const newSection = new Section({ name, day, timeZone, technology });
    await newSection.save();
    res.status(201).json(newSection);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const editStudentList = async (req, res) => {
  try {
    const { sectionId } = req.params;
    const { addStudents, removeStudents } = req.body;

    let section = await Section.findById(sectionId);

    if (addStudents) {
      section.students.push(...addStudents);
    }

    if (removeStudents) {
      section.students.pull(...removeStudents);
    }

    await section.save();
    res.status(200).json(section);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const assignTeacher = async (req, res) => {
  try {
    const { sectionId } = req.params;
    const { teacherId } = req.body;

    let section = await Section.findById(sectionId);
    section.teacher = teacherId;

    await section.save();
    res.status(200).json(section);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Other methods like getMonthlyReport, sendNotification, getAttendance, getProgress, getAssignments would follow similar patterns.

const generateToken = (id, role) => {
    return jwt.sign({ _id: id, role }, process.env.JWT_SECRET, { expiresIn: '1h' });
  };
  

module.exports = {
  signup,
  login,
  createSection,
  editStudentList,
  assignTeacher,
  generateToken,  
}