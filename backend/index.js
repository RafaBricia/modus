const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;

const adminRoute = require("./route/adminRoute.js");
const db = require("./db/database.js");


app.use(bodyParser.json()); // Para ler o corpo das requisições como JSON
app.use("/api", adminRoute);


app.listen(port, () => {

  console.log(`Aplicação rodando na porta ${port}`);

});
