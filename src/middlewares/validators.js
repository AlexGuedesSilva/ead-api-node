const { body, validationResult } = require("express-validator");

// Middleware para checar erros
const validate = (validations) => {
  return async (req, res, next) => {
    for (let validation of validations) {
      await validation.run(req);
    }
    const errors = validationResult(req);
    if (errors.isEmpty()) return next();

    return res.status(400).json({ errors: errors.array() });
  };
};

// Validações para usuário
const userRegisterValidation = [
  body("name").notEmpty().withMessage("Nome é obrigatório."),
  body("email").isEmail().withMessage("Email inválido."),
  body("password").isLength({ min: 6 }).withMessage("Senha precisa ter no mínimo 6 caracteres."),
  body("role").optional().isIn(["student", "teacher", "admin"]).withMessage("Role inválido."),
];

// Validações para login
const userLoginValidation = [
  body("email").isEmail().withMessage("Email inválido."),
  body("password").notEmpty().withMessage("Senha é obrigatória."),
];

// Validações para cursos
const courseValidation = [
  body("title").notEmpty().withMessage("Título do curso é obrigatório."),
  body("teacherId").notEmpty().withMessage("ID do professor é obrigatório."),
];

module.exports = { validate, userRegisterValidation, userLoginValidation, courseValidation };
