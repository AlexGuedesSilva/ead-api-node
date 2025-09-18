const { Sequelize } = require("sequelize");
require("dotenv").config();

// Criando instância do Sequelize
const sequelize = new Sequelize(
  process.env.DB_NAME,      // nome do banco
  process.env.DB_USER,      // usuário
  process.env.DB_PASSWORD,  // senha
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 3306,
    dialect: "mysql",
    logging: false, // desativa logs de SQL no console
  }
);

// Teste de conexão (opcional, útil para debug)
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("✅ Conexão com MySQL bem-sucedida!");
  } catch (error) {
    console.error("❌ Erro ao conectar no MySQL:", error.message);
  }
}

module.exports = { sequelize, testConnection };
