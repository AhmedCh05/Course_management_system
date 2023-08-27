const mongoose = require('mongoose')

const professorSchema = new mongoose.Schema({
    firstName:{type:String,require:true},
    lastName : {type:String,require:true},
    Subject : {type:String,require:true}
});


const Professor = mongoose.model('Professor',professorSchema)

module.exports = Professor;