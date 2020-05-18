const { Question } = require('../lib/mysql');

class QuestionsServies {
  async get(id = null) {
    if (id) {
      return Question.findOne({ where: { id } });
    }
    return Question.findAll();
  }

  async create(question) {
    return Question.create(question);
  }

  async update(id, data) {
    const question = await Question.findOne({ where: { id } });
    if (question) {
      await Question.update(data, { where: { id } });
      return Question.findOne({ where: { id } });
    }
    throw new Error('Question not found');
  }

  async delete(id) {
    const question = await Question.findOne({ where: { id } });

    if (question) {
      return question.destroy({ where: { id } });
    }
    throw new Error('Answer not found');
  }
}

module.exports = QuestionsServies;
