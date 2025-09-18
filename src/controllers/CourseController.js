const CourseService = require("../services/CourseService");

class CourseController {
  async create(req, res) {
    try {
      const course = await CourseService.create(req.body);
      res.status(201).json(course);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async getAll(req, res) {
    try {
      const courses = await CourseService.getAll();
      res.json(courses);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getById(req, res) {
    try {
      const course = await CourseService.getById(req.params.id);
      res.json(course);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  }
}

module.exports = new CourseController();
