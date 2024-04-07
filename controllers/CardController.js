const mongoose = require('mongoose');
const Card = mongoose.model('Card');

module.exports = {
    async index(req, res) {
        const cards = await Card.find();
        return res.json(cards);
    },
};