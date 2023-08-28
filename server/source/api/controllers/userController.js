const bcrypt = require("bcrypt");
const LoginModel = require('../models/loginCredentialsModel');
const { createTokens } = require('../utils/JsonWebTokens');

// Controller function for signing up a user
exports.signUpUser = async (req, res) => {
    try {
        const { password } = req.body;
        bcrypt.hash(password, 10).then(async (hash) => {
            const newUser = new LoginModel({
                email: req.body.email,
                password: hash,
                firstName: req.body.firstName,
                lastName: req.body.lastName
            });
            await newUser.save();
            res.status(200).send("User Account Registered");
        });
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
};

// Controller function for logging in a user
exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const register = await LoginModel.findOne({ email: email });
        if (!register) {
            return res.sendStatus(400);
        }
        const dbPassword = register.password;
        bcrypt.compare(password, dbPassword).then((match) => {
            if (!match) {
                return res.sendStatus(400);
            } else {
                const accessToken = createTokens(register);
                res.send(accessToken);
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
};
