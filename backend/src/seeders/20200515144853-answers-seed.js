const { Question } = require('../lib/mysql');

module.exports = {
  up: async (queryInterface) => {
    const questionIdOne = await Question.findOne({
      where: { text: '¿Proteger el agua significa?' },
    });
    const questionIdTwo = await Question.findOne({
      where: {
        text:
          '¿En los grandes tanques de un depurador entran en acción las bacterias, gracias a la continua adición de?',
      },
    });
    const questionIdThree = await Question.findOne({
      where: {
        text:
          '¿Los sistemas de depuración no son siempre utilizados, porque su costo es?',
      },
    });
    const questionIdFour = await Question.findOne({
      where: {
        text: '¿Arruinar el ambiente es?',
      },
    });
    const questionIdFive = await Question.findOne({
      where: {
        text: '¿Los insecticidas sirven para?',
      },
    });
    return queryInterface.bulkInsert(
      'Answers',
      [
        {
          text: 'Depurarla',
          position: 1,
          questionId: questionIdOne.id,
          createdAt: new Date(),
        },
        {
          text: 'Utilizar insecticida',
          position: 2,
          questionId: questionIdOne.id,
          createdAt: new Date(),
        },
        {
          text: 'Utilizar hidrocarburos',
          position: 3,
          questionId: questionIdOne.id,
          createdAt: new Date(),
        },
        {
          text: 'Utilizar detergentes',
          position: 4,
          questionId: questionIdOne.id,
          createdAt: new Date(),
        },
        {
          text: 'Utilizar químicos',
          position: 5,
          questionId: questionIdOne.id,
          createdAt: new Date(),
        },
      ],
      [
        {
          text: 'Depurarla',
          position: 1,
          questionId: questionIdTwo.id,
          createdAt: new Date(),
        },
        {
          text: 'Utilizar insecticida',
          position: 2,
          questionId: questionIdTwo.id,
          createdAt: new Date(),
        },
        {
          text: 'Utilizar hidrocarburos',
          position: 3,
          questionId: questionIdTwo.id,
          createdAt: new Date(),
        },
        {
          text: 'Utilizar detergentes',
          position: 4,
          questionId: questionIdTwo.id,
          createdAt: new Date(),
        },
        {
          text: 'Utilizar químicos',
          position: 5,
          questionId: questionIdTwo.id,
          createdAt: new Date(),
        },
      ],
      [
        {
          text: 'Elevado',
          position: 1,
          questionId: questionIdThree.id,
          createdAt: new Date(),
        },
        {
          text: 'Limitado',
          position: 2,
          questionId: questionIdThree.id,
          createdAt: new Date(),
        },
        {
          text: 'Nocivo',
          position: 3,
          questionId: questionIdThree.id,
          createdAt: new Date(),
        },
        {
          text: 'Ninguna de las anteriores',
          position: 4,
          questionId: questionIdThree.id,
          createdAt: new Date(),
        },
      ],
      [
        {
          text: 'Difícil',
          position: 1,
          questionId: questionIdFour.id,
          createdAt: new Date(),
        },
        {
          text: 'Fácil',
          position: 2,
          questionId: questionIdFour.id,
          createdAt: new Date(),
        },
        {
          text: 'Económico',
          position: 3,
          questionId: questionIdFour.id,
          createdAt: new Date(),
        },
        {
          text: 'Gustoso',
          position: 4,
          questionId: questionIdFour.id,
          createdAt: new Date(),
        },
        {
          text: 'Fácil y económico',
          position: 5,
          questionId: questionIdFour.id,
          createdAt: new Date(),
        },
      ],
      [
        {
          text: 'Activar millones de motores',
          position: 1,
          questionId: questionIdFive.id,
          createdAt: new Date(),
        },
        {
          text: 'Limpiar objetos',
          position: 2,
          questionId: questionIdFive.id,
          createdAt: new Date(),
        },
        {
          text: 'Protección de los animales',
          position: 3,
          questionId: questionIdFive.id,
          createdAt: new Date(),
        },
        {
          text: 'Protección de las cosechas de los parásitos',
          position: 4,
          questionId: questionIdFive.id,
          createdAt: new Date(),
        },
        {
          text: 'Lavar prendas y utensilios de cocina',
          position: 5,
          questionId: questionIdFive.id,
          createdAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('Answers', null, {});
  },
};
