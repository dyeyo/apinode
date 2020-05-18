const { Module } = require('../lib/mysql');

class ModulesService {
  async get(id = null) {
    if (id) {
      return Module.findOne({ where: { id } });
    }
    return Module.findAll();
  }

  async create(modules) {
    return Module.create(modules);
  }

  async update(id, data) {
    const module = await Module.findOne({ where: { id } });
    if (module) {
      await Module.update(data, { where: { id } });
      return Module.findOne({ where: { id } });
    }
    throw new Error('Module not found');
  }

  async delete(id) {
    const module = await Module.findOne({ where: { id } });

    if (module) {
      return module.destroy({ where: { id } });
    }
    throw new Error('Answer not found');
  }
}

module.exports = ModulesService;
