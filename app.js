require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");

//connect DB
require("./config/db.config");

const app = express();

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

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