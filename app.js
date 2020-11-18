const express = require("express");
const bodyParser = require("body-parser");
const app = express(); // create express app
const database = require("./config/db");
const package = require("./package.json");

app.use(bodyParser.urlencoded({ extended: true })); // parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse requests of content-type - application/json

app.get("/", (req, res) => {
  return res.status(200).json({ name: package.name, versio: package.version });
});

// ----------------------------------------
// Rotas de Auth
// ----------------------------------------
var AuthController = require("./src/Auth/AuthController");

app.post("/api/v1/auth/register", AuthController.register);
app.post("/api/v1/auth/login", AuthController.login);
app.post("/api/v1/auth/logout", AuthController.logout);

// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------
// Controllers
// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------
var UserController = require("./src/User/UserController");
var PartnerController = require("./src/Partner/PartnerController");
var VerificaToken = require("./src/Token/VerificaToken");

// ----------------------------------------
// USER
// ----------------------------------------
app.get("/api/v1/user/", VerificaToken, UserController.findAll);
app.get("/api/v1/user/:id", VerificaToken, UserController.findById);

// ----------------------------------------
// PARTNER
// ----------------------------------------
app.get("/api/v1/partner/", VerificaToken, PartnerController.findAll);
app.get("/api/v1/partner/:id", VerificaToken, PartnerController.findById);
app.post("/api/v1/partner/", VerificaToken, PartnerController.insert);
app.put("/api/v1/partner/:id", VerificaToken, PartnerController.update);

// ----------------------------------------
module.exports = app;
// ----------------------------------------
