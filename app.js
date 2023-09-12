const express = require('express');
const body_parser = require('body-parser');
const userRouter = require('./routers/user.router');
const TaskManagerRouter = require('./routers/task_manager.router');

const app = express();

app.use(body_parser.json());

app.use('/', userRouter);
app.use('/', TaskManagerRouter);

module.exports = app;
