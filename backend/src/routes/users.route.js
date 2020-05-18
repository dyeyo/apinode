const express = require('express');

const UsersService = require('../services/users.services');

const router = express.Router();
const usersService = new UsersService();

router.get('/', async (req, res) => {
  const users = await usersService.get();
  res.status(200).json({
    data: users,
    message: 'Users listed',
  });
});

router.get('/:id', async (req, res) => {
  const {
    params: { id },
  } = req;

  const user = await usersService.get(id);
  if (user) {
    res.status(200).json({
      data: user,
      message: `User with id ${id}`,
    });
  } else {
    res.status(404).json({
      data: null,
      message: `User not found`,
    });
  }
});

router.post('/', async (req, res) => {
  const { body: user } = req;
  try {
    const createdUser = await usersService.create(user);
    res.status(201).json({
      data: createdUser,
      message: 'User created',
    });
  } catch (error) {
    res.status(500).json({
      error: error.errors ? error.errors[0].message : error.message,
    });
  }
});

router.put('/:id', async (req, res) => {
  const {
    params: { id },
  } = req;
  const { body: user } = req;

  try {
    const updatedUser = await usersService.update(id, user);
    res.status(201).json({
      data: updatedUser,
      message: 'User updated',
    });
  } catch (error) {
    res.status(500).json({
      error: error.errors ? error.errors[0].message : error.message,
    });
  }
});

router.delete('/:id', async (req, res) => {
  const {
    params: { id },
  } = req;

  try {
    await usersService.delete(id);
    res.status(201).json({
      message: 'User deleted',
    });
  } catch (error) {
    res.status(500).json({
      error: error.errors ? error.errors[0].message : error.message,
    });
  }
});

module.exports = router;
