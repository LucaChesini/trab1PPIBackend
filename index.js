const express = require('express');
const requireDir = require('require-dir');
const app = express();
const cors = require('cors');
const db = require('./src/db')
const jwt = require('jsonwebtoken');
const UsuarioController = require('./controllers/UsuarioController');
const accessTokenSecret = process.env.JWT_SECRET;
require('dotenv/config');

app.use(express.json());

app.use(cors());

db.sync().then(() => {
    console.log(`Banco de dados conectado: ${process.env.DB_NAME}`);
});

requireDir('./models');

app.use('/api', require('./routes'));

app.post('/api/login', async (req, res) => {
    const { nome, senha } = req.body;
    try {
        const usuario = await UsuarioController.authenticate(nome, senha);
        if (usuario) {
            const accessToken = jwt.sign({ nome: usuario.nome, role: usuario.role }, accessTokenSecret);
            res.json({ accessToken });
        } else {
            res.status(401).send('Nome de usuário ou senha incorretos');
        }
    } catch (err) {
        res.status(500).send('Erro ao autenticar usuário');
    }
});


app.listen(3000, () => {
    console.log("Aplicativo ouvindo a porta 3000");
});