const express = require("express");
const UserController = require("../controllers/UserController");
const authMiddleware = require("../middlewares/authMiddleware");
const { validate, userRegisterValidation, userLoginValidation } = require("../middlewares/validators");

const router = express.Router();

router.post("/register", validate(userRegisterValidation), UserController.register);
router.post("/login", validate(userLoginValidation), UserController.login);
router.get("/:id", authMiddleware, UserController.getById);
router.get("/", authMiddleware, UserController.getAll);

module.exports = router;
