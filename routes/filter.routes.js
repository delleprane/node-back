const { Router } = require('express');

const search = new Router();
const mongoose = require('mongoose');

const User = require("../models/user.model");

//Filter por nickname
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


//Filter por name
search.post('/search/name', async(req, res) => {
    try {
        const { name } = req.body
        const userSearching = await User.find({
            name: { $regex: '.*' + name + '.*' }
        })
        res.status(200).json({ userSearching })
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar usuário" })
    }

});

module.exports = search;