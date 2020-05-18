const { Classroom } = require('../lib/mysql');

class ClassroomService {
  async get(id = null) {
    if (id) {
      return Classroom.findOne({ where: { id } });
    }
    return Classroom.findAll();
  }

  async create(classrooms) {
    return Classroom.create(classrooms);
  }

  async update(id, data) {
    const classroom = await Classroom.findOne({ where: { id } });
    if (classroom) {
      await Classroom.update(data, { where: { id } });
      return Classroom.findOne({ where: { id } });
    }
    throw new Error('Classroom not found');
  }

  async delete(id) {
    const classroom = await Classroom.findOne({ where: { id } });

    if (classroom) {
      return classroom.destroy({ where: { id } });
    }
    throw new Error('Answer not found');
  }
}

module.exports = ClassroomService;
