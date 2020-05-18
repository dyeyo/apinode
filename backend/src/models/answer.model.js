module.exports = (sequelize, DataTypes) => {
  const Answer = sequelize.define(
    'Answer',
    {
      text: DataTypes.STRING,
      position: DataTypes.INTEGER,
      questionId: DataTypes.INTEGER,
    },
    {}
  );
  Answer.associate = function (models) {
    Answer.belongsTo(models.Answer, {
      foreignKey: 'questionId',
      onDelete: 'cascade',
    });
  };
  return Answer;
};
