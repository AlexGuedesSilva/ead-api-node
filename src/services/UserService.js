const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserRepository = require("../repositories/UserRepository");
const { hashPassword, comparePassword } = require('../utils/password');
const saltRounds = 12;

class UserService {
  async register(data) {
    data.password = await hashPassword(data.password, saltRounds);
    return await UserRepository.create(data);
  }

  async login(email, password) {
    const user = await UserRepository.findByEmail(email);
    if (!user) throw new Error("Usuário não encontrado.");

    const match = await comparePassword(password, user.password);
    if (!match) throw new Error("Senha inválida.");

    const token = jwt.sign(
      { id: user.id, role: user.role },              // payload
      process.env.JWT_SECRET,                        // secret key
      { expiresIn: process.env.JWT_EXPIRES_IN });    // options, including expiration
    return { user, token };
  }

  async getById(id) {
    const user = await UserRepository.findById(id);
    if (!user) throw new Error("Usuário não encontrado.");
    return user;
  }

  async getAll() {
    return await UserRepository.findAll();
  }
}

module.exports = new UserService();
