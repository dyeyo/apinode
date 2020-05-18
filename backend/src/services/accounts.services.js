const { Account } = require('../lib/mysql');

class AccountsService {
  async create({ account }) {
    return Account.create({ ...account, isActive: true });
  }

  async resetPassword(email, newPassword) {
    const account = await Account.findOne({ where: { email } });
    if (account) {
      return account.update({ password: newPassword });
    }
    return null;
  }
}

module.exports = AccountsService;
