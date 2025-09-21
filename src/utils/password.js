// utils/password.js
const bcrypt = require('bcrypt');
const saltRounds = 10;

/**
 * Gera o hash de uma senha.
 * @param {string} password - A senha em texto claro.
 * @returns {Promise<string>} O hash da senha.
 */
async function hashPassword(password) {
  try {
    const hash = await bcrypt.hash(password, saltRounds);
    return hash;
  } catch (error) {
    throw new Error('Erro ao gerar o hash da senha.');
  }
}

/**
 * Compara uma senha em texto claro com um hash armazenado.
 * @param {string} password - A senha em texto claro.
 * @param {string} hash - O hash da senha armazenado.
 * @returns {Promise<boolean>} `true` se as senhas coincidirem, `false` caso contrário.
 */
async function comparePassword(password, hash) {
  try {
    const isMatch = await bcrypt.compare(password, hash);
    return isMatch;
  } catch (error) {
    throw new Error('Erro ao comparar as senhas.');
  }
}

module.exports = { hashPassword, comparePassword };
