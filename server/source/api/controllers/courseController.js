const CourseModel = require('../models/courseModel');

exports.addCourse = async (req, res) => {
    try {
        const { CourseName, ProfessorID, CourseDescription } = req.body;
        const course = new CourseModel({	
            CourseName,
            ProfessorID,
            CourseDescription,
        });
        await course.save();
        res.status(200).send("Course Added");
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
};

exports.getAllCourses = async (req, res) => {
    try {
        const result = await CourseModel.find().populate('ProfessorID');
        res.send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
};
