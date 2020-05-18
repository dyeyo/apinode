module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define(
    'Account',
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      isActive: DataTypes.BOOLEAN,
    },
    {}
  );
  return Account;
};
