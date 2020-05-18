const { User } = require('../lib/mysql');

class UsersService {
  async get(id = null) {
    if (id) {
      return User.findOne({ where: { id } });
    }
    return User.findAll();
  }

  async create(user) {
    return User.create(user);
  }

  async update(id, data) {
    const user = await User.findOne({ where: { id } });
    if (user) {
      await User.update(data, { where: { id } });
      return User.findOne({ where: { id } });
    }
    throw new Error('User not found');
  }

  async delete(id) {
    const user = await User.findOne({ where: { id } });

    if (user) {
      return User.destroy({ where: { id } });
    }
    throw new Error('User not found');
  }
}

module.exports = UsersService;
