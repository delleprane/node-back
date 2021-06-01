const { Router } = require('express');

const search = new Router();
const mongoose = require('mongoose');

const User = require("../models/user.model");


search.post('/search', async(req, res) => {
    try {
        const { name, lastname, nickname } = req.body
        const productSearching = await Product.find({ name: { $regex: '.*' + name + '.*' }, lastname:{ $regex: '.*' + lastname + '.*' }, lastname:{ $regex: '.*' + nickname + '.*' } })
        res.status(200).json({ productSearching })
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar usuário" })
    }
    
});

module.exports = search;