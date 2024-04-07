const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    descricao: {
        type: String,
        required: true,
    },
    coluna: {
        type: String,
        required: true,
    }
});

mongoose.model("Card", CardSchema);