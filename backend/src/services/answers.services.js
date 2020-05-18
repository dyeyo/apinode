const { Answer } = require('../lib/mysql');

class AnswerService {
  async get(id = null) {
    if (id) {
      return Answer.findOne({ where: { id } });
    }
    return Answer.findAll();
  }

  async create(aswere) {
    return Answer.create(aswere);
  }

  async update(id, data) {
    const answer = await Answer.findOne({ where: { id } });
    if (answer) {
      await Answer.update(data, { where: { id } });
      return Answer.findOne({ where: { id } });
    }
    throw new Error('Answer not found');
  }

  async delete(id) {
    const answer = await Answer.findOne({ where: { id } });

    if (answer) {
      return Answer.destroy({ where: { id } });
    }
    throw new Error('Answer not found');
  }
}

module.exports = AnswerService;
