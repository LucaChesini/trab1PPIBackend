const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Rodando Backend Sim');
});

app.listen(3000, () => {
    console.log("Exemplo de aplicativo ouvindo a porta 3000");
});