import mongoose from 'mongoose';
const { Schema } = mongoose;

const pagamento = new Schema({

  metodo: { 
    type: String, 
    required: true 
  },

  valor: { 
    type: Number, 
    required: true
   },

  carrinho: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref:"carrinho", 
    required: true 
  },

  status: { // verificar se vai existir mesmo
    type: String, 
    required: true,
    enum: [ "Efetuado", "Não Efetuado" ]
  }

});

module.exports = mongoose.model("pagamento", pagamentoSchema);