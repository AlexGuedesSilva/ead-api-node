// swagger.js
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "EAD API Node",
      version: "1.0.0",
      description: "API de cursos e usuários para plataforma EAD",
    },
    servers: [
      {
        url: "http://localhost:3000/api/", // ajuste conforme sua porta/basePath
      },
    ],
    components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
    },
  },
  apis: ["./src/routes/courseRoutes.js", "./src/routes/userRoutes.js"], // onde estão suas rotas (ajuste conforme sua estrutura)
};

const swaggerSpec = swaggerJSDoc(options);

function swaggerDocs(app) {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

module.exports = swaggerDocs;
