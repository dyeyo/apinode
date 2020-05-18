module.exports = (sequelize, DataTypes) => {
  const Module = sequelize.define(
    'Module',
    {
      name: DataTypes.STRING,
      number: DataTypes.INTEGER,
      classroomId: DataTypes.INTEGER,
    },
    {}
  );

  Module.associate = function (models) {
    Module.belongsTo(models.Module, {
      foreignKey: 'classroomId',
      onDelete: 'CASCADE',
    });
    Module.hasMany(models.Test, {
      foreignKey: 'moduleId',
    });
  };

  return Module;
};
