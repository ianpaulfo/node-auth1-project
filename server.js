const express = require("express");
const helmet = require("helmet");

const usersRouter = require("./users/users-router");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/users", usersRouter);

server.get("/", (req, res) => {
    res.send("<h1>Intro to Authentication Project<h1>");
});

module.exports = server;