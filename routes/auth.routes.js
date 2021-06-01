const { Router } = require("express");


const User = require("../models/user.model");
const Address = require("../models/address")

const authRouter = Router();


authRouter.post("/auth/signup", async(req, res) => {
    const { name, lastname, nickname } = req.body;

    try {
        const user = await User.create({ name, lastname, nickname });
        res.status(201).json({ message: "Usuário criado" });
    } catch (error) {
        res.status(500).json({ message: "erro ao criar usuário" });
    }
})


module.exports = authRouter;