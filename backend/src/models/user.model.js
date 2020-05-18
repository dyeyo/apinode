module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      picture: DataTypes.STRING,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      documentType: DataTypes.STRING,
      documentNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          msg: 'This document number is already taken.',
        },
      },
      birthDate: DataTypes.DATE,
      phone: DataTypes.STRING,
      fullName: {
        type: DataTypes.VIRTUAL,
        get() {
          return `${this.firstName} ${this.lastName}`;
        },
        set() {
          throw new Error('Do not try to set the `fullName` value!');
        },
      },
    },
    {}
  );
  User.associate = function () {
    // associations can be defined here
  };
  return User;
};
