const express = require('express');
const courseController = require('../controllers/courseController');

const router = express.Router();

router.post("/addcourse", courseController.addCourse);
router.get("/allCourses", courseController.getAllCourses);

module.exports = router;
