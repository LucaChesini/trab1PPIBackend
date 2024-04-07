const express = require('express');
const requireDir = require('require-dir');
const app = express();
const mongoose = require('mongoose');
const url = "mongodb://127.0.0.1:27017";
const cors = require('cors');

app.use(express.json());

app.use(cors());

mongoose.connect(url, {dbName: 'kanban'});

requireDir('./models');

app.use('/api', require('./routes'));  

app.listen(3000, () => {
    console.log("Aplicativo ouvindo a porta 3000");
});