const express = require('express');

const AnswerService = require('../services/answers.services');

const router = express.Router();
const answerService = new AnswerService();

router.get('/', async (req, res) => {
  const answers = await answerService.get();
  res.status(200).json({
    data: answers,
    message: 'Answers listed',
  });
});

router.get('/:id', async (req, res) => {
  const {
    params: { id },
  } = req;
  const answer = await answerService.get(id);
  if (answer) {
    res.status(200).json({
      data: answer,
      message: `Answer with id ${id}`,
    });
  } else {
    res.status(404).json({
      data: null,
      message: `Answer not found`,
    });
  }
});

router.post('/', async (req, res) => {
  const { body: aswere } = req;
  try {
    const createAswere = await answerService.create(aswere);
    res.status(200).json({
      data: createAswere,
      message: 'Answer created',
    });
  } catch (error) {
    res.status(500).json({
      error: error.errors ? error.errors[0].message : error.message,
    });
  }
});

router.put('/:id', async (req, res) => {
  const {
    params: { id },
  } = req;
  const { body: answer } = req;
  try {
    const updatedAnswer = await answerService.update(id, answer);
    res.status(200).json({
      data: updatedAnswer,
      message: 'Answer it was edited',
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
    await answerService.delete(id);
    res.status(200).json({
      message: `Answer ${id} deleted`,
    });
  } catch (error) {
    res.status(500).json({
      error: error.errors ? error.errors[0].message : error.message,
    });
  }
});

module.exports = router;
