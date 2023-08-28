const StudentModel = require('../models/studentModel');

// Controller function for getting all students
exports.getAllStudents = async (req, res) => {
    try {
        const result = await StudentModel.find();
        res.send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
};
