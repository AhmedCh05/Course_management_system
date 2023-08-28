const ProfessorModel = require('../models/professorModel');

// Controller function for getting all professors
exports.getAllProfessors = async (req, res) => {
    try {
        const result = await ProfessorModel.find();
        res.send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
};
