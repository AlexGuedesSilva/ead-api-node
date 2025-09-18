const Course = require("../models/Course");

class CourseRepository {
  async create(data) {
    return await Course.create(data);
  }

  async findAll() {
    return await Course.findAll({ include: { association: "teacher", attributes: ["id", "name"] } });
  }

  async findById(id) {
    return await Course.findByPk(id, { include: { association: "teacher", attributes: ["id", "name"] } });
  }
}

module.exports = new CourseRepository();
