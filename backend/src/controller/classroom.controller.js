const { Classroom } = require('../lib/mysql');

exports.get = async (req, res) => {
  const { id } = req.params;
  if (id) {
    const classroom = await Classroom.findOne({ where: { id } });
    res.status(200).json({
      data: classroom,
      message: `Classroom with id= ${id} listed`,
    });
  }
  const classrooms = await Classroom.findAll();
  res.status(200).json({
    data: classrooms,
    message: 'Classroom listed',
  });
};

exports.store = async (req, res) => {
  const { body: classroom } = req;
  try {
    const createdClassroom = await Classroom.create(classroom);
    res.status(201).json({
      data: createdClassroom,
      message: 'Classroom created',
    });
  } catch (error) {
    res.status(500).json({
      error: error.errors ? error.errors[0].message : error.message,
    });
  }
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const { body: classroom } = req;
  const updatedClassroom = await Classroom.findOne({ where: { id } });
  if (updatedClassroom) {
    await Classroom.update(classroom, { where: { id } });
    res.status(200).json({
      data: updatedClassroom,
      message: 'Classroom edited',
    });
  }
  throw new Error('Classroom not found');
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  const deletedClassroom = await Classroom.findOne({ where: { id } });
  if (deletedClassroom) {
    await deletedClassroom.destroy({ where: { id } });
    res.status(200).json({
      data: deletedClassroom,
      message: 'Classroom deleted',
    });
  }
  throw new Error('Classroom not found');
};
