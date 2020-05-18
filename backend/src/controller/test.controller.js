const { Test } = require('../lib/mysql');

exports.get = async (req, res) => {
  const { id } = req.params;
  if (id) {
    const test = await Test.findOne({ where: { id } });
    res.status(200).json({
      data: test,
      message: `test with id= ${id} listed`,
    });
  }
  const tests = await Test.findAll();
  res.status(200).json({
    data: tests,
    message: 'Tests listed',
  });
};

exports.store = async (req, res) => {
  const { body: test } = req;
  try {
    const createdTest = await Test.create(test);
    res.status(201).json({
      data: createdTest,
      message: 'test created',
    });
  } catch (error) {
    res.status(500).json({
      error: error.errors ? error.errors[0].message : error.message,
    });
  }
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const { body: test } = req;
  const updatedTest = await Test.findOne({ where: { id } });
  if (updatedTest) {
    await Test.update(test, { where: { id } });
    res.status(200).json({
      data: updatedTest,
      message: 'test edited',
    });
  }
  throw new Error('test not found');
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  const deletedTest = await Test.findOne({ where: { id } });
  if (deletedTest) {
    await deletedTest.destroy({ where: { id } });
    res.status(200).json({
      data: deletedTest,
      message: 'test deleted',
    });
  }
  throw new Error('test not found');
};
