const { Test, Question, Answer } = require('../lib/mysql');

class TestsService {
  async get(id = null) {
    if (id) {
      return Test.findOne({ where: { id } });
    }
    return Test.findAll({
      include: [
        {
          model: Question,
          include: [{ model: Answer }],
        },
      ],
    });
  }

  async create(tests) {
    return Test.create(tests);
  }

  async update(id, data) {
    const test = await Test.findOne({ where: { id } });
    if (test) {
      await Test.update(data, { where: { id } });
      return Test.findOne({ where: { id } });
    }
    throw new Error('Test not found');
  }

  async delete(id) {
    const test = await Test.findOne({ where: { id } });

    if (test) {
      return test.destroy({ where: { id } });
    }
    throw new Error('Test not found');
  }
}

module.exports = TestsService;
