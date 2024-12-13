const express = require('express');
const router = express.Router();
const TeacherController = require('../controllers/teacher');

router.post('/signup', TeacherController.signup);
router.post('/login', TeacherController.login);
router.post('/assignTask/:sectionId', TeacherController.assignTask);
router.get('/taskSubmissions/:taskId', TeacherController.getTaskSubmissions);
router.post('/gradeTask/:taskId', TeacherController.gradeTask);
router.get('/monthlyReport/:sectionId', TeacherController.getMonthlyReport);
router.post('/sendNotification', TeacherController.sendNotification);

module.exports = router;
