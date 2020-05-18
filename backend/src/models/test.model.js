module.exports = (sequelize, DataTypes) => {
  const Test = sequelize.define(
    'Test',
    {
      title: DataTypes.STRING,
      reading: DataTypes.STRING,
      numWords: DataTypes.INTEGER,
      time: DataTypes.INTEGER,
      moduleId: DataTypes.INTEGER,
    },
    {}
  );
  Test.associate = function (models) {
    Test.belongsTo(models.Test, {
      foreignKey: 'moduleId',
      onDelete: 'CASCADE',
    });

    Test.hasMany(models.Question, {
      foreignKey: 'testId',
    });
  };

  return Test;
};
