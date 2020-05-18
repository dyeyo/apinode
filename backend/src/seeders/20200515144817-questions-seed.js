const { Test } = require('../lib/mysql');

module.exports = {
  up: async (queryInterface) => {
    const testId = await Test.findOne({
      where: { title: 'SALVAR EL AGUA' },
    });
    return queryInterface.bulkInsert(
      'Questions',
      [
        {
          text: '¿Proteger el agua significa?',
          correctAnswersIds: JSON.stringify([1]),
          position: 1,
          type: 1,
          testId: testId.id,
          createdAt: new Date(),
        },
        {
          text:
            '¿En los grandes tanques de un depurador entran en acción las bacterias, gracias a la continua adición de?',
          correctAnswersIds: JSON.stringify([2]),
          position: 2,
          type: 2,
          testId: testId.id,
          createdAt: new Date(),
        },
        {
          text:
            '¿Los sistemas de depuración no son siempre utilizados, porque su costo es?',
          correctAnswersIds: JSON.stringify([1]),
          position: 3,
          type: 1,
          testId: testId.id,
          createdAt: new Date(),
        },
        {
          text: '¿Arruinar el ambiente es?',
          correctAnswersIds: JSON.stringify([2]),
          position: 4,
          type: 1,
          testId: testId.id,
          createdAt: new Date(),
        },
        {
          text: '¿Los insecticidas sirven para?',
          correctAnswersIds: JSON.stringify([4]),
          position: 5,
          type: 1,
          testId: testId.id,
          createdAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('Questions', null, {});
  },
};
