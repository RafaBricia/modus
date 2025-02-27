import mongoose from 'mongoose';
const { Schema } = mongoose;

const cliente = new Schema({

  nome: { 
    type: String, 
    required: true 
  },

  cpf: { 
    type: Number, 
    required: true
   },

  senha: { 
    type: String, 
    required: true 
  },

  email: { 
    type: String, 
    required: true 
  }

});

module.exports = mongoose.model("cliente", clienteSchema);
