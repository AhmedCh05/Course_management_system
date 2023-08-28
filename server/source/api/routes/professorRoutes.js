const express = require('express');
const professorController = require('../controllers/professorController');

const router = express.Router();

router.get('/allprofessor', professorController.getAllProfessors);

module.exports = router;
