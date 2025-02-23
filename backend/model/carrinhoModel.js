import mongoose from 'mongoose';
const { Schema } = mongoose;

const carrinho = new Schema({

  valor: { 
    type: Number, 
    required: true 
  },

  quantidade: { 
    type: Number, 
    required: true
   },

  produto: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref:"produto", 
    required: true 
  }

});

module.exports = mongoose.model("carrinho", carrinhoSchema);