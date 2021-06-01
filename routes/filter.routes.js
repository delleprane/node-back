const { Router } = require('express');

const search = new Router();
const mongoose = require('mongoose');

const User = require("../models/user.model");


search.post('/search', async(req, res) => {
    try {
        const { nickname } = req.body
        const userSearching = await User.find({
            nickname: { $regex: '.*' + nickname + '.*' }
        })
        res.status(200).json({ userSearching })
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar usuário" })
    }

});

module.exports = search;