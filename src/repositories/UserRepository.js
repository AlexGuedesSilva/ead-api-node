const User = require("../models/User");

class UserRepository {
  async create(data) {
    return await User.create(data);
  }

  async findByEmail(email) {
    return await User.findOne({ where: { email } });
  }

  async findById(id) {
    return await User.findByPk(id, { attributes: { exclude: ["password"] } });
  }

  async findAll() {
    return await User.findAll({ attributes: { exclude: ["password"] } });
  }
}

module.exports = new UserRepository();
