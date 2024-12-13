const express = require('express');
const router = express.Router();
const AdminController = require('../Controllers/AdminController');

router.post('/signup', AdminController.signup);
router.post('/login', AdminController.login);
router.post('/createSection', AdminController.createSection);
router.put('/editStudentList/:sectionId', AdminController.editStudentList);
router.put('/assignTeacher/:sectionId', AdminController.assignTeacher);
router.get('/monthlyReport/:sectionId', AdminController.getMonthlyReport);
router.post('/sendNotification', AdminController.sendNotification);
router.get('/attendance/:sectionId', AdminController.getAttendance);
router.get('/progress/:sectionId', AdminController.getProgress);
router.get('/assignments/:sectionId', AdminController.getAssignments);

module.exports = router;
