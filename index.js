const express = require('express');
const requireDir = require('require-dir');
const app = express();
const cors = require('cors');
const db = require('./src/db')

app.use(express.json());

app.use(cors());

db.sync().then(() => {
    console.log(`Banco de dados conectado: ${process.env.DB_NAME}`);
});

requireDir('./models');

app.use('/api', require('./routes'));  

app.listen(3000, () => {
    console.log("Aplicativo ouvindo a porta 3000");
});