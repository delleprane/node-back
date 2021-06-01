const { Schema, model } = require("mongoose");
const UserSchema = new Schema({
    name: {
        type: String,

    },
    lastname: {
        type: String,

    },
    nickname: {
        type: String,
        require: [true, "Apelido é obrigatório"],
        maxlength: 100
    },

    bio: {
        type: String,
        maxlength: 100
    },

},
    { timestamps: true }
);

module.exports = model("user", UserSchema);