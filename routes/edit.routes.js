const { Router } = require("express");


const User = require("../models/user.model");


const editRouter = Router();

editRouter.patch("/perfil/:id", async(req, res) => {
    try {
        const user = req.body;
        const { id } = req.params;
        const patchUser = await User.findByIdAndUpdate(id, user, {
            new: true,
        });
        res.status(201).json(patchUser);
    } catch (error) {
        res.status(500).json({ message: "Erro ao editar informações" });
    }
});

module.exports = editRouter;