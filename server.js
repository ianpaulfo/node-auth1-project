const express = require("express");
const helmet = require("helmet");
const session = require("express-session");

const usersRouter = require("./users/users-router");
const authRouter = require("./auth/auth-router");
const loginRouter = require("./login/login-router");

const authenticator = require("./auth/authenticator");

const server = express();

const sessionConfig ={
    name: "ian",
    secret: "this is a secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 30, 
        secure: false, 
        httpOnly: true, 
    }
}

server.use(helmet());
server.use(express.json());

server.use(session(sessionConfig));


server.use("/api/users", authenticator, usersRouter);
server.use("/api/login", loginRouter);
server.use("/api/register", authRouter);
server.get("/", (req, res) => {
    res.send("<h1>Intro to Authentication Project<h1>");
});

module.exports = server;