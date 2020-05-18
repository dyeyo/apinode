module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          firstName: 'Juan Pablo',
          lastName: 'Salazar Restrepo',
          documentType: 'C.C',
          documentNumber: '101010',
          phone: '3184690679',
          birthDate: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('users', null, {});
  },
};
