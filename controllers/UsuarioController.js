const Usuario = require('../models/Usuario');

module.exports = {
    async findAll(req, res) {
        try {
            const usuarios = await Usuario.findAll();
            return res.json(usuarios);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    },
    async show(req, res) {
        try {
            const usuario = await Usuario.findByPk(req.params.id);
            return res.json(usuario);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    },
    async store(req, res) {
        try {
            const usuario = await Usuario.create(req.body);
            return res.json(usuario);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    },
    async update(req, res) {
        try {
            const usuario = await Usuario.findByPk(req.params.id);
            await usuario.update(req.body);
            return res.json({ usuario });
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    },
    async destroy(req, res) {
        try {
            const usuario = await Usuario.findByPk(req.params.id);
            await usuario.destroy();
            return res.json();
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    },
    async authenticate(nome, senha) {
        try {
            const usuario = await Usuario.findOne({ where: { nome, senha } });
            return usuario;
        } catch (err) {
            throw new Error(err.message);
        }
    }
}