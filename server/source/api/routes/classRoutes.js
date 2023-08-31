const express = require('express');
const classController = require('../controllers/classController');

const router = express.Router();

router.post('/addclasses', classController.addClass);
router.get('/allclasses', classController.getAllClasses);

module.exports = router;
