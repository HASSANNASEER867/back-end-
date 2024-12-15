const express = require('express');
const router = express.Router();
const {login,signup,resetPassword} = require('../controllers/studentController');

router.post('/signup', signup);
router.post('/login', login);
router.post('/resetPassword', resetPassword);
// router.post('/submitTask/:taskId', submitTask);
// router.get('/grades/:sectionId', getGrades);
// router.get('/notifications', getNotifications);

module.exports = router;
