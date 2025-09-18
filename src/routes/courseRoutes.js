const express = require("express");
const CourseController = require("../controllers/CourseController");
const authMiddleware = require("../middlewares/authMiddleware");
const { validate, courseValidation } = require("../middlewares/validators");

const router = express.Router();

router.post("/", authMiddleware, validate(courseValidation), CourseController.create);
router.get("/", CourseController.getAll);
router.get("/:id", CourseController.getById);

module.exports = router;
