const { Router } = require("express");


const User = require("../models/user.model");


const deliteRouter = Router();

deliteRouter.delete("/perfil/:id", async(req, res) => {
    try {
        const { id } = req.params;
        await User.findByIdAndRemove(id);
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar usuário" });
    }
});

module.exports = deliteRouter;