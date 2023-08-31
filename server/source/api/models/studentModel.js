const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    firstName : {type:String,require:true},
    lastName:{type:String,require:true},
    Gender : {type:String, enum:["None","Male","Female"] , default:"None"},
    Age : {type:Number,require:true}
});


const Student = mongoose.model('Students',studentSchema)

module.exports = Student;