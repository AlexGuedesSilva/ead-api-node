const express = require("express");
const CourseController = require("../controllers/CourseController");
const authMiddleware = require("../middlewares/authMiddleware");
const { validate, courseValidation } = require("../middlewares/validators");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Courses
 *   description: Endpoints de gerenciamento de cursos
 */

/**
 * @swagger
 * /courses:
 *   post:
 *     summary: Criar um novo curso
 *     tags: [Courses]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *             properties:
 *               title:
 *                 type: string
 *                 example: Curso de Node.js
 *               description:
 *                 type: string
 *                 example: Curso introdutório de Node.js para iniciantes
 *     responses:
 *       201:
 *         description: Curso criado com sucesso
 *       400:
 *         description: Erro de validação
 *       401:
 *         description: Não autorizado (token inválido ou ausente)
 */
router.post("/", authMiddleware, validate(courseValidation), CourseController.create);

/**
 * @swagger
 * /courses:
 *   get:
 *     summary: Listar todos os cursos
 *     tags: [Courses]
 *     responses:
 *       200:
 *         description: Lista de cursos retornada com sucesso
 */
router.get("/", CourseController.getAll);

/**
 * @swagger
 * /courses/{id}:
 *   get:
 *     summary: Buscar curso por ID
 *     tags: [Courses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do curso
 *     responses:
 *       200:
 *         description: Curso encontrado
 *       404:
 *         description: Curso não encontrado
 */
router.get("/:id", CourseController.getById);

module.exports = router;
