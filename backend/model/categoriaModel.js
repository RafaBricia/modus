import mongoose from 'mongoose';
const { Schema } = mongoose;

const categoriaSchema = new Schema(
  {
    tipo: {
      type: String,
      required: true,
      enum: ["Camisas", "Saias", "Calças", "Sutiãs", "Calcinhas", "Cropped", "Meias"],
      trim: true
    },
    descricao: { // Inclusão de uma descrição opcional ao produto
      type: String,
      required: false,
      trim: true
    },
    ativo: { // Controle de categoria se ela estiver ativa
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true // criação automática do createdAt e updatedAt
  }
);

module.exports = mongoose.model("Categoria", categoriaSchema);