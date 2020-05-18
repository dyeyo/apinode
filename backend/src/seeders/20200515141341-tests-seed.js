// const { READING_1, MODULE_1 } = require('../utils/global_seeders');
const { Module } = require('../lib/mysql');

module.exports = {
  up: async (queryInterface) => {
    const moduleId = await Module.findOne({
      where: { name: 'Modulo uno' },
    });
    return queryInterface.bulkInsert(
      'Tests',
      [
        {
          title: 'SALVAR EL AGUA',
          reading:
            'Los insecticidas, hidrocarburos y detergentes son los principales responsables de lacontaminación del agua.  Infortunadamente,  no es posible prescindir totalmente de ellos.  Losinsecticidas sirven para proteger las cosechas de los parásitos, los hidrocarburos activanmillones de motores, y los detergentes limpian una infinidad de objetos y de prendas.Sin embargo, es necesario limitar el uso de sustancias contaminantes.En la agricultura se buscan nuevas formas de proteger las cosechas,  por ejemplo,seleccionando las especies de plantas más resistentes a los parásitos o combatiendo losinsectos nocivos con otros insectos que sean sus enemigos.  Otros, en lugar de químicos,utilizan cada vez más los organismos naturales.  En muchos países, las leyes ya prohíbenla venta de detergentes no biodegradables (es decir, que no se descomponen en bacterias yenzimas).Proteger el agua significa también depurarla para poder volver a usarla o ponerla en circulación.Muchas ciudades ya están dotadas de depuradoras, y pronto todos los centros habitados deberánseguir su ejemplo,  purificando el agua sucia de sus desperdicios antes de que sean vertidasen los ríos y en los mares.  En los grandes tanques de un depurador entran en acción las bacterias barrenderas que,gracias a la continua adición de oxígeno, se multiplican vertiginosamente y en poco tiempo limpian el agua.En el fondo de los tanques se depositan hongos, utilizados como abono.Los daños provocados por las industrias que echan en los ríos y mares residuos nocivos tambiénpueden ser limitados y depurados.Infortunadamente, los sistemas de depuración no son siempre utilizados, porque su costo es elevado.Es un precio que tenemos que pagar si no queremos comprometer nuestras vidas.  Arruinar el ambientees fácil, pero arreglarlo es más difícil.Por ello, de ahora en adelante debemos pensar especialmente en evitar la contaminación hídrica.',
          numWords: 295,
          time: 74,
          moduleId: moduleId.id,
          createdAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('Tests', null, {});
  },
};
