require('dotenv').config();
require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const bodyparser = require('body-parser');
const dbConfig = require('./config/dbConfig');
const {createTokens} = require('./utils/JsonWebTokens');

const ClassModel = require('./models/classModel');
const CourseModel = require('./models/courseModel');
const StudentModel = require('./models/studentModel');
const ProfessorModel = require('./models/professorModel');
const LoginModel = require('./models/loginCredentialsModel');


const app = express();

app.use(express.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*", methods: "GET,PUT,POST,DELETE" }));

dbConfig.connect();



////				ADD COURSE

app.post("/course/addcourse", async (req, res) => {
	const course = new CourseModel({	
		CourseName: req.body.CourseName,
		ProfessorID: req.body.ProfessorID,
		CourseDescription: req.body.CourseDescription,
	});
	const H = await course.save();
	res.status(200).send("Course Added");

});



////				ADD CLASSES

app.post("/class/addclasses", async (req, res) => {
	const newclass = new ClassModel({	
		ClassName: req.body.ClassName,
		RoomNo : req.body.RoomNo,
		CourseID : req.body.CourseID,
		ProfessorID: req.body.ProfessorID
	});
	const H = await newclass.save();
	res.status(200).send("Class Added");
	
});


////				SIGN UP USER

app.post("/user/signUp", async (req, res) => {
	const { password } = req.body;
	bcrypt.hash(password, 10).then(async (hash) => {
		const newUser = new LoginModel({
			email: req.body.email,
            password: hash,
            firstName: req.body.firstName,
			lastName: req.body.lastName
		});
		const H = await newUser.save();
		res.status(200).send("User Account Registered");
	});

});

////				LOGIN USER

app.post("/user/login", async (req, res) => {
	const { email, password } = req.body;

	const register = await LoginModel.findOne({ email: email });
	if (!register) {
		return res.sendStatus(400);
	}
	const dbPassword = register.password;
	bcrypt.compare(password, dbPassword).then((match) => {
 	if (!match) {
 		return res.sendStatus(400);
 	}
 	else {
			const accessToken = createTokens(register);
			res.send(accessToken)
		}
	});
});

////              DISPLAY All STUDENTS

app.get("/student/allstudents", async (req, res) => {
    try {
        const result = await StudentModel.find();
        res.send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});


////              DISPLAY All CLASSES

app.get("/class/allclasses", async (req, res) => {
    try {
        const result = await ClassModel.find().populate('ProfessorID').populate('CourseID');
        res.send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

////              DISPLAY All COURSES

app.get("/course/allCourses", async (req, res) => {
    try {
        const result = await CourseModel.find().populate('ProfessorID');
        res.send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});


////              DISPLAY All PROFESSORS

app.get("/professor/allprofessor", async (req, res) => {
    try {
        const result = await ProfessorModel.find();
        res.send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});




////              Verify Email

app.post("user/forgetPassword/verifyEmail", async (req, res) => {
	const { email } = req.body;
	const user = LoginModel.find({ email: email });
	if (user) {
		res.sendStatus(200);
	}
    else{
        res.sendStatus(403);
    }
});

////              Forget Password

app.put("/forgetPassword", async (req, res) => {
	const { email,password } = req.body;
	bcrypt.hash(password, 10).then(async (hash) => {
		const newUser = await LoginModel.find({ email: email });
		if (newUser) {
			LoginModel.updateOne(
				{ _id: newUser[0]._id },
				{ $set: { password: hash } },
				(updateErr) => {
					if (updateErr) {
						console.error(updateErr);
						res.status(500).send(updateErr);
						return;
					}
					

					res.send({ message: "Password Successfully Updated" });
				}
			);
		}
	}
	);
});

app.listen(process.env.PORT, () => {
	console.log(`Server listening on port ${process.env.PORT}`);
});