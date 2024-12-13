const jwt = require('jsonwebtoken');
const Admin = require('../Models/Admin');
const Teacher = require('../Models/Teacher');
const Student = require('../Models/Sections');

const authenticate = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    let user;

    if (decoded.role === 'ADMIN') {
      user = await Admin.findById(decoded._id);
    } else if (decoded.role === 'TEACHER') {
      user = await Teacher.findById(decoded._id);
    } else if (decoded.role === 'STUDENT') {
      user = await Student.findById(decoded._id);
    }

    if (!user) {
      throw new Error();
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Please authenticate' });
  }
};

module.exports = authenticate;
