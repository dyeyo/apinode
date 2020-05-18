module.exports = (sequelize, DataTypes) => {
  const Classroom = sequelize.define(
    'Classroom',
    {
      name: DataTypes.STRING,
    },
    {}
  );
  Classroom.associate = function (models) {
    Classroom.hasMany(models.Module, {
      foreignKey: 'classroomId',
    });
  };
  return Classroom;
};
