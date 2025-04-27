const db = require('./db'); // Importa a conexão com o banco de dados

async function login(email, password) {
    try {
        const [rows] = await db.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password]);
        return rows.length > 0; // Retorna true se o usuário for encontrado
    } catch (err) {
        console.error('Erro ao executar a consulta:', err);
        throw err; // Lança o erro para ser tratado no server.js
    }
}

module.exports = login;