const UserService = require("../services/UserService");

class UserController {
  async register(req, res) {
    try {
      const user = await UserService.register(req.body);
      res.status(201).json({ message: "Usuário criado com sucesso!", user });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async login(req, res) {
    try {
      const { user, token } = await UserService.login(req.body.email, req.body.password);
      res.json({ user, token });
    } catch (err) {
      res.status(401).json({ error: err.message });
    }
  }

  async getById(req, res) {
    try {
      const user = await UserService.getById(req.params.id);
      res.json(user);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  }

  async getAll(req, res) {
    try {
      const users = await UserService.getAll();
      res.json(users);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = new UserController();
