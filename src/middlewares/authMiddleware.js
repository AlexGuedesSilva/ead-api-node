const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;             //... pegar o token do header
  if (!authHeader) return res.status(401).json({ error: "Token não fornecido." });

  const token = authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Token inválido." });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // id e role
    next();
  } catch (err) {
    res.status(401).json({ error: "Token inválido ou expirado." });
  }
};
