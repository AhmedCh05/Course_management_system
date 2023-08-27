const { mongoose } = require("mongoose");

const LoginSchema = new mongoose.Schema({
    email : {type:String,require:true,unique:true},
    password:{type:String,require:true},
    firstName: {type:String,require:true},
    lastName: {type:String,require:true},
});

const LoginCredentials = mongoose.model('LoginCredentials',LoginSchema);

module.exports =  LoginCredentials;