const express = require("express");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
    res.send("<h1>Intro to Authentication Project<h1>");
});

module.exports = server;