const CourseRepository = require("../repositories/CourseRepository");
const UserRepository = require("../repositories/UserRepository");

class CourseService {
  async create(data) {
    const teacher = await UserRepository.findById(data.teacherId);
    if (!teacher || teacher.role !== "teacher") throw new Error("Professor inválido.");
    return await CourseRepository.create(data);
  }

  async getAll() {
    return await CourseRepository.findAll();
  }

  async getById(id) {
    const course = await CourseRepository.findById(id);
    if (!course) throw new Error("Curso não encontrado.");
    return course;
  }
}

module.exports = new CourseService();
