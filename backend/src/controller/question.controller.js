const { Question } = require('../lib/mysql');

exports.get = async (req, res) => {
  const { id } = req.params;
  if (id) {
    const question = await Question.findOne({ where: { id } });
    res.status(200).json({
      data: question,
      message: `question with id= ${id} listed`,
    });
  }
  const questions = await Question.findAll();
  res.status(200).json({
    data: questions,
    message: 'questions listed',
  });
};

exports.store = async (req, res) => {
  const { body: question } = req;
  try {
    const createdQuestion = await Question.create(question);
    res.status(201).json({
      data: createdQuestion,
      message: 'question created',
    });
  } catch (error) {
    res.status(500).json({
      error: error.errors ? error.errors[0].message : error.message,
    });
  }
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const { body: question } = req;
  const updatedQuestion = await Question.findOne({ where: { id } });
  if (updatedQuestion) {
    await Question.update(question, { where: { id } });
    res.status(200).json({
      data: updatedQuestion,
      message: 'question edited',
    });
  }
  throw new Error('question not found');
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  const deletedQuestion = await Question.findOne({ where: { id } });
  if (deletedQuestion) {
    await deletedQuestion.destroy({ where: { id } });
    res.status(200).json({
      data: deletedQuestion,
      message: 'question deleted',
    });
  }
  throw new Error('question not found');
};
