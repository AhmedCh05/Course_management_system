const express = require('express');
const studentController = require('../controllers/studentController');

const router = express.Router();

router.get('/allstudents', studentController.getAllStudents);

module.exports = router;
