const ClassModel = require('../models/classModel');

// Controller function for adding a class
exports.addClass = async (req, res) => {
    try {
        const { ClassName, RoomNo, CourseID, ProfessorID } = req.body;
        const newClass = new ClassModel({
            ClassName,
            RoomNo,
            CourseID,
            ProfessorID
        });
        await newClass.save();
        res.status(200).send("Class Added");
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
};

// Controller function for getting all classes
exports.getAllClasses = async (req, res) => {
    try {
        const result = await ClassModel.find().populate('ProfessorID').populate('CourseID');
        res.send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
};
