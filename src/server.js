const app = require("./app");
const { sequelize } = require("./config/database"); // conexão Sequelize/MySQL

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    // Testa conexão com DB
    await sequelize.authenticate();
    console.log("✅ Conexão com MySQL estabelecida com sucesso.");

    // Sincroniza models → cria tabelas se não existirem
    await sequelize.sync({ alter: true }); 
    console.log("📦 Models sincronizados com o banco de dados.");

    // Inicia servidor
    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando na porta ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Erro ao iniciar servidor:", error.message);
    process.exit(1);
  }
}

startServer();
