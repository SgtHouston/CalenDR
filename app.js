// install nodemon
// add code "dev": "nodemon ./bin/www" in package.json
// npm install 
// git init
// .gitignore
// npm install sequelize
// install postgres package -> npm install pg
// npm install sequelize-cli 
// npx sequelize-cli init
// Development: username and dialect changed to postgres in config.json
// Development:database = project name 
// npx sequelize-cli db:create to create database in Postgres
// npx sequelize-cli model:generate --name Patient \--attributes "name:string, birthdate:dateonly, covid:boolean, phone:string"
// npx sequelize-cli db:migrate
// npx sequelize-cli model:generate --name Doctor \--attributes "name:string, specialty:string, location:string"
// npx sequelize-cli model:generate --name Appointment --attributes "time:date, DoctorId:integer, PatientId:integer"
// Edit migration files to link databases
// references: {
//     model: 'Patients',
//     key: 'id'
//   } ties tables together using key
// references: {
//     model: 'Doctors',
//     key: 'id'
//   }
// define associations in appointment.js/doctor.js/patient.js
// // // define association here
// Appointment.belongsTo(models.Patient)
// Appointment.belongsTo(models.Doctor)

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
