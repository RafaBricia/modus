import mongoose from 'mongoose';
const { Schema } = mongoose;

const categoria = new Schema({

  tipo: { 
    type: String, 
    required: true,
    enum: [ "Camisas", "Saias", "Calças", "Sutiãs", "Calcinha", "Cropped", "meias" ]

  }

});

module.exports = mongoose.model("categoria", categoriaSchema);
