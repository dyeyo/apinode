const express = require('express');
const AccountRouter = require('./accounts.route');
const UserRouter = require('./users.route');
const ClassroomRouter = require('./classrooms.route');
const ModuleRouter = require('./modules.route');
const TestRouter = require('./tests.route');
const QuestionRouter = require('./questions.route');
const AnswerRouter = require('./answers.route');

const router = express.Router();

router.use('/accounts', AccountRouter);
router.use('/users', UserRouter);
router.use('/classrooms', ClassroomRouter);
router.use('/modules', ModuleRouter);
router.use('/tests', TestRouter);
router.use('/questions', QuestionRouter);
router.use('/answers', AnswerRouter);

module.exports = router;
