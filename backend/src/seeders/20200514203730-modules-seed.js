// const { CLASSROOM_1, MODULE_1 } = require('../utils/global_seeders');
const { Classroom } = require('../lib/mysql');

module.exports = {
  up: async (queryInterface) => {
    const classroomId = await Classroom.findOne({
      where: { name: 'Salon rojo' },
    });

    return queryInterface.bulkInsert(
      'Modules',
      [
        {
          // name: MODULE_1,
          name: 'Modulo uno',
          number: 1,
          classroomId: classroomId.id,
          createdAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('Modules', null, {});
  },
};
