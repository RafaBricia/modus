let mongoose = require('mongoose');
const Admin = require('../model/adminModel.js')

const server = 'localhost:27017'; 
const database = 'modusDB'; // botar o nome do banco

function criarAdminPadrao() {
  Admin.find()
    .then((admins) => {
      if (admins.length === 0) { 
        return bcrypt.hash("teste123", 10); 
      } else {
        throw new Error("Já existem administradores no banco de dados.");
      }
    })
    .then((hashedPassword) => {
      return Admin.create({ 
        nome: "Admin Padrão",
        cpf: 12345678900, 
        senha: hashedPassword,
        email: "admin@exemplo.com"
      });
    })
    .then(() => {
      console.log("Administrador padrão criado com sucesso!");
    })
    .catch((error) => {
      if (error.message === "Já existem administradores no banco de dados.") {
        console.log(error.message);
      } else {
        console.error("Erro ao criar administrador padrão:", error);
      }
    });
}


class Database {
  constructor() {
    this._connect()
  }
  
_connect() {
     mongoose.connect(`mongodb://${server}/${database}`)
       .then(() => {
         console.log('Database connection successful')
         criarAdminPadrao()
       })
       .catch(err => {
         console.error('Database connection error')
       })
  }
}

module.exports = new Database()