const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    CourseName : {type:String,require:true},
    ProfessorID : {type:mongoose.SchemaTypes.ObjectId,ref:'Professor'},
    CourseDescription : {type:String,require:true}
});


const Course = mongoose.model('Courses',courseSchema)

module.exports = Course;