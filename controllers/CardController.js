const mongoose = require('mongoose');
const Card = mongoose.model('Card');

module.exports = {
    async index(req, res) {
        const cards = await Card.find();
        return res.json(cards);
    },

    async store(req, res) {
        const card = await Card.create(req.body);
        return res.json(card);
    },

    async show(req, res) {
        const card = await Card.findById(req.params.id);
        return res.json(card);
    },

    async update(req, res) {
        const card = await Card.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        return res.json(card);
    },

    async delete(req, res) {
        const card = await Card.findByIdAndDelete(req.params.id);
        return res.send({msg: "Excluído"});
    }
};