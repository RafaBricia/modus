const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("./db/database.js");
const cors = require('cors')

const clienteRoute = require("./route/clienteRoute.js");
const carrinhoRoute = require("./route/carrinhoRoute.js");
const produtoRoute = require("./route/produtoRoute.js");
const categoriaRoute = require('./route/categoriaRoute');
const adminRoute = require('./route/adminRoute');
const loginRoute = require('./route/loginRoute');
const PagamentoRoute = require('./route/pagamentoRoute');
const pedidosRoute = require('./route/pedidosRoute');


app.use(cors({
  origin: 'http://3.101.120.131:5173'
}));
app.use(bodyParser.json()); // Para ler o corpo das requisições como JSON

app.use("/api",produtoRoute);
app.use("/api",PagamentoRoute);
app.use("/api", clienteRoute);
app.use("/api",carrinhoRoute);
app.use("/api",adminRoute);
app.use("/api",loginRoute);
app.use("/api", categoriaRoute);
app.use("/api", pedidosRoute);

const port = 80;
app.listen(port, () => {

  console.log(`Aplicação rodando na porta ${port}`);

});