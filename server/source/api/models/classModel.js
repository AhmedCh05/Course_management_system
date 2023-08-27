const mongoose = require('mongoose')

const classSchema = new mongoose.Schema({
    ClassName : {type:String,require:true},
    RoomNo:{type:String,require:true},
    CourseID : {type:mongoose.SchemaTypes.ObjectId,ref:'Courses'},
    ProfessorID : {type:mongoose.SchemaTypes.ObjectId,ref:'Professor'}
});


const Class = mongoose.model('Classes',classSchema)

module.exports = Class;