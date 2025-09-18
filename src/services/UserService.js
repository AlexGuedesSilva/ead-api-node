const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserRepository = require("../repositories/UserRepository");

class UserService {
  async register(data) {
    data.password = await bcrypt.hash(data.password, 10);
    return await UserRepository.create(data);
  }

  async login(email, password) {
    const user = await UserRepository.findByEmail(email);
    if (!user) throw new Error("Usuário não encontrado.");

    const match = await bcrypt.compare(password, user.password);
    if (!match) throw new Error("Senha inválida.");

    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
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
