// const CLASSROOM_1 = require('../utils/global_seeders');

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert(
      'Classrooms',
      // [{ name: CLASSROOM_1, createdAt: new Date() }],
      [{ name: 'Salon rojo', createdAt: new Date() }],
      {}
    );
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('Classrooms', null, {});
  },
};
