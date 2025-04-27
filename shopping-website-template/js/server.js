const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(cors()); // Permite requisições de outros domínios
app.use(bodyParser.json()); // Faz o parse do corpo das requisições JSON

// Rota de login
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Validação simples de autenticação
    if (!email || !password) {
        return res.status(400).json({ success: false, message: 'E-mail e senha são obrigatórios.' });
    }

    // Simulação de autenticação
    if (email === 'usuario@exemplo.com' && password === '123456') {
        return res.status(200).json({ success: true, message: 'Login bem-sucedido!' });
    } else {
        return res.status(401).json({ success: false, message: 'E-mail ou senha inválidos.' });
    }
});

// Rota padrão para erros 404
app.use((req, res) => {
    res.status(404).json({ success: false, message: 'Rota não encontrada.' });
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});