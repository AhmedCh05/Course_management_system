require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const dbConfig = require('./config/dbConfig');

const courseRoutes = require('./routes/courseRoutes');
const classRoutes = require('./routes/classRoutes');
const userRoutes = require('./routes/userRoutes');
const studentRoutes = require('./routes/studentRoute');
const professorRoutes = require('./routes/professorRoutes');

const app = express();

app.use(express.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: '*', methods: 'GET,PUT,POST,DELETE' }));

dbConfig.connect();

app.use('/course', courseRoutes);
app.use('/class', classRoutes);
app.use('/user', userRoutes);
app,use('/professor',professoRoutes);
app.use('/student',studentRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
});
