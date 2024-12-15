const express = require("express");
const router = express.Router();
const { assignTeacher, signup, login, createSection, editStudentList, generateToken } = require("../controllers/adminController");

router.post("/signup", signup);
router.post("/login", login);
router.post("/createSection", createSection);
router.put("/editStudentList/:sectionId", editStudentList);
router.put("/assignTeacher/:sectionId", assignTeacher);
// router.get("/monthlyReport/:sectionId", getMonthlyReport);
// router.post("/sendNotification", sendNotification);
// router.get("/attendance/:sectionId", getAttendance);
// router.get("/progress/:sectionId", getProgress);
// router.get("/assignments/:sectionId", getAssignments);

module.exports = router;
