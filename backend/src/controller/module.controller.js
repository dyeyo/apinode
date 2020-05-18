const { Module } = require('../lib/mysql');

exports.get = async (req, res) => {
  const { id } = req.params;
  if (id) {
    const module = await Module.findOne({ where: { id } });
    res.status(200).json({
      data: module,
      message: `Module with id= ${id} listed`,
    });
  }
  const modules = await Module.findAll();
  res.status(200).json({
    data: modules,
    message: 'Module listed',
  });
};

exports.store = async (req, res) => {
  const { body: module } = req;
  try {
    const createdModule = await Module.create(module);
    res.status(201).json({
      data: createdModule,
      message: 'Module created',
    });
  } catch (error) {
    res.status(500).json({
      error: error.errors ? error.errors[0].message : error.message,
    });
  }
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const { body: module } = req;
  const updatedModule = await Module.findOne({ where: { id } });
  if (updatedModule) {
    await Module.update(module, { where: { id } });
    res.status(200).json({
      data: updatedModule,
      message: 'Module edited',
    });
  }
  throw new Error('Module not found');
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  const deletedModule = await Module.findOne({ where: { id } });
  if (deletedModule) {
    await deletedModule.destroy({ where: { id } });
    res.status(200).json({
      data: deletedModule,
      message: 'Module deleted',
    });
  }
  throw new Error('Module not found');
};
