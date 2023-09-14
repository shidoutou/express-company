const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const employeeRouter = require('./routes/employees');
const auth = require('./routes/auth');
const attendances = require('./routes/attendances');
const salary = require('./routes/salary');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/employees', employeeRouter);
app.use('/auth', auth);
app.use('/attendances', attendances);
app.use('/salary', salary);

module.exports = app;
