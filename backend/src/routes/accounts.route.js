const express = require('express');
const AccountsService = require('../services/accounts.services');

const router = express.Router();
const accountsService = new AccountsService();

router.post('/', async (req, res) => {
  const { body: account } = req;
  const createdAccount = await accountsService.create({ account });
  res.status(201).json({
    data: createdAccount,
    message: 'account created ',
  });
});

router.get('/password/reset', async (req, res) => {
  const {
    body: { email, newPassword },
  } = req;

  const passwordUpdatedAccount = await accountsService.resetPassword(
    email,
    newPassword
  );

  if (passwordUpdatedAccount) {
    res.status(201).json({
      data: passwordUpdatedAccount,
      message: `password was reset ${email}`,
    });
  } else {
    res.status(500).json({
      data: null,
      message: `Something was wrong`,
    });
  }
});

router.delete('/:id', function (req, res) {
  const { id } = req.params;
  res.status(201).json({
    data: {},
    message: `delete user with id ${id}`,
  });
});

module.exports = router;
