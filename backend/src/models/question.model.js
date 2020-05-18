module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define(
    'Question',
    {
      text: DataTypes.STRING,
      correctAnswersIds: DataTypes.JSON,
      position: DataTypes.INTEGER,
      type: DataTypes.INTEGER,
      testId: DataTypes.INTEGER,
    },
    {}
  );

  Question.associate = function (models) {
    Question.belongsTo(models.Question, {
      foreignKey: 'testId',
      onDelete: 'CASCADE',
    });
    Question.hasMany(models.Answer, {
      foreignKey: 'questionId',
    });
  };
  return Question;
};
