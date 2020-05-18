const express = require('express');

const QuestionsServices = require('../services/questions.services');

const router = express.Router();

const questionsServices = new QuestionsServices();

router.get('/', async (req, res) => {
  const questions = await questionsServices.get();
  res.status(200).json({
    data: questions,
    message: 'Questions listed',
  });
});

router.post('/', async (req, res) => {
  const { body: questions } = req;
  try {
    const questionModule = await questionsServices.create(questions);
    res.status(201).json({
      data: questionModule,
      message: 'Question created',
    });
  } catch (error) {
    res.status(500).json({
      error: error.errors ? error.errors[0].message : error.message,
    });
  }
});

router.get('/:id', async (req, res) => {
  const {
    params: { id },
  } = req;
  const question = await questionsServices.get(id);
  res.status(200).json({
    data: question,
    message: `Question with id ${id}`,
  });
});

router.put('/:id', async (req, res) => {
  const {
    params: { id },
  } = req;
  const { body: question } = req;
  try {
    const updatedquestion = await questionsServices.update(id, question);
    res.status(200).json({
      data: updatedquestion,
      message: 'Question it was edited',
    });
  } catch (error) {
    res.status(500).json({
      error: error.errors ? error.errors[0].message : error.message,
    });
  }
});

router.delete('/:id', async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    await questionsServices.delete(id);
    res.status(200).json({
      message: `Question ${id} deleted`,
    });
  } catch (error) {
    res.status(500).json({
      error: error.errors ? error.errors[0].message : error.message,
    });
  }
});

module.exports = router;
