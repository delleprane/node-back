const { Schema, model } = require("mongoose");
const UserSchema = new Schema({
    name: {
        type: String,
        require: [true, "Nome é obrigatório"]

    },
    lastname: {
        type: String,
        require: [true, "Sobrenome é obrigatório"]

    },
    nickname: {
        type: String,
        unique: true,
        require: [true, "Apelido é obrigatório"],
        maxlength: [30, 'Você passou de 30 caracteres.'],
    },

    bio: {
        type: String,
        maxlength: [100, 'Você passou dos 100 caracteres.']
    },
    address: {
        type: String,
        require: [true, "Endereço é obrigatório"]
    }

}, { timestamps: true });

module.exports = model("user", UserSchema);