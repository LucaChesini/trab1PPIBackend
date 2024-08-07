const Card = require('../models/Card');

module.exports = {
    async findAll(req, res) {
        try {
            const cards = await Card.findAll();
            return res.json(cards);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    },
    async show(req, res) {
        try {
            const card = await Card.findByPk(req.params.id);
            return res.json(card);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    },
    async store(req, res) {
        try {
            const card = await Card.create(req.body);
            return res.json(card);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    },
    async update(req, res) {
        try {
            const card = await Card.findByPk(req.params.id);
            await card.update(req.body);
            return res.json({ card });
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    },
    async destroy(req, res) {
        try {
            const card = await Card.findByPk(req.params.id);
            await card.destroy();
            return res.json();
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }
}