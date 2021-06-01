require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const authMiddleware = require("./middlewares/auth.middleware")

    //connect DB
require("./config/db.config");

const app = express();

app.use(cors());


//Routes

const authRoutes = require("./routes/auth.routes");
const deliteRouter = require("./routes/delete.routes");
const editRouter = require("./routes/edit.routes");
const search = require("./routes/filter.routes");
const homeRouter = require("./routes/home.routes");

app.use("/", homeRouter);
app.use("/", authRoutes);
app.use("/", deliteRouter);
app.use("/", editRouter);
app.use("/", search);

module.exports = app;