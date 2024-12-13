const express = require('express');
const router = express.Router();
const StudentController = require('../controllers/student');

router.post('/signup', StudentController.signup);
router.post('/login', StudentController.login);
router.post('/resetPassword', StudentController.resetPassword);
router.post('/submitTask/:taskId', StudentController.submitTask);
router.get('/grades/:sectionId', StudentController.getGrades);
router.get('/notifications', StudentController.getNotifications);

module.exports = router;
