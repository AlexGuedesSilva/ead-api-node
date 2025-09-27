const express = require("express");
const UserController = require("../controllers/UserController");
const authMiddleware = require("../middlewares/authMiddleware");
const { validate, userRegisterValidation, userLoginValidation } = require("../middlewares/validators");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Endpoints de gerenciamento de usuários
 */

/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: Registrar novo usuário
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - email
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *                 example: joaosilva
 *               email:
 *                 type: string
 *                 format: email
 *                 example: joao@email.com
 *               password:
 *                 type: string
 *                 format: password
 *                 example: 123456
 *     responses:
 *       201:
 *         description: Usuário registrado com sucesso
 *       400:
 *         description: Erro de validação
 */
router.post("/register", validate(userRegisterValidation), UserController.register);

/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: Login de usuário
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: joao@email.com
 *               password:
 *                 type: string
 *                 format: password
 *                 example: 123456
 *     responses:
 *       200:
 *         description: Login realizado com sucesso (retorna token JWT)
 *       401:
 *         description: Credenciais inválidas
 */
router.post("/login", validate(userLoginValidation), UserController.login);

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Buscar usuário por ID
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do usuário
 *     responses:
 *       200:
 *         description: Usuário encontrado
 *       401:
 *         description: Não autorizado (token inválido ou ausente)
 *       404:
 *         description: Usuário não encontrado
 */
router.get("/:id", authMiddleware, UserController.getById);

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Listar todos os usuários
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de usuários retornada
 *       401:
 *         description: Não autorizado (token inválido ou ausente)
 */
router.get("/", authMiddleware, UserController.getAll);

module.exports = router;
