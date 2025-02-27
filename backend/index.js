const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;

const clienteRoute = require("./route/clienteRoute.js");
const carrinhoRoute = require("./route/carrinhoRoute.js");
const produtoRoute = require("./route/produtoRoute.js");

const db = require("./db/database.js");


app.use(bodyParser.json()); // Para ler o corpo das requisições como JSON
app.use("/api", clienteRoute);
app.use("/api",carrinhoRoute);
app.use("/api",produtoRoute);


app.listen(port, () => {

  console.log(`Aplicação rodando na porta ${port}`);

});
