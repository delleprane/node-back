const { Router } = require("express");


const userModel = require("../models/user.model");


const homeRouter = Router();

homeRouter.get("/", async(req, res) => {
    try {
        const home = await userModel.find();
        res.status(200).json(home);
    } catch (error) {
        res.status(500).json({ message: "Erro ao trazer os usuários" });
    }
});

module.exports = homeRouter;