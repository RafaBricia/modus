import mongoose from 'mongoose';
const { Schema } = mongoose;

const produto = new Schema({

    categoria: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categoria',
        required: true,
        enum: [ "Camisas", "Saias", "Calças", "Sutiãs", "Calcinha", "Cropped", "meias" ]
    },

    nome: { 
        type: String, 
        required: true 
    },

    tamanho: {
        type: String, 
        required: true,
        enum: [ "P", "M", "G", "GG", "XG" ]
    },

    valor: {
        type: Number, 
        required: true
    },

    descrição: {
        type: String, 
        required: true
    }
    
    

});

module.exports = mongoose.model("produto", produtoSchema);
