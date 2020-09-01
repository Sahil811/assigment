const path = require("path");
const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const userRouter = require("./routes/userRoutes");

const app = express();

app.use(bodyParser.json());

app.use(express.json({ limit: "10kb" }));

app.use(cookieParser());

app.use("/api/v1/users", userRouter);

module.exports = app;
