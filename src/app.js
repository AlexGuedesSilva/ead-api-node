const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const swaggerDocs = require("../swagger");

const userRoutes = require("./routes/userRoutes");
const courseRoutes = require("./routes/courseRoutes");

const app = express();

// Middlewares globais
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Rotas principais
app.use("/api/users", userRoutes);
app.use("/api/courses", courseRoutes);

// Swagger
swaggerDocs(app);

// Rota de teste
app.get("/", (req, res) => {
  res.json({ message: "API EAD Platform is running 🚀" });
});

module.exports = app;
