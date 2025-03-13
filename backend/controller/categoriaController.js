const mongoose = require("mongoose");
const Categoria = require("../model/categoriaModel.js");

function verificarTipoValido(tipo) {
  try{
    return typeof tipo === "string" && tipo.trim().length > 0;

  }catch(error){
      return error

  }
}

function verificarDescricaoValida(descricao) {
  try{
    return typeof descricao === "string" && descricao.trim().length > 0;

  }catch(error){
      return error

  }
}


function validarCategoria(req, res) {
  const { tipo, descricao,categoria } = req.body;

  if (!tipo || !descricao) {
    return { status: 400, message: "Todos os campos são obrigatórios." };
  }

  if (!verificarTipoValido(tipo)) {
    return {
      status: 400,
      message: "Tipo deve ser uma string e não pode estar vazio.",
    };
  }

  if (!verificarDescricaoValida(descricao)) {
    return { status: 400, message: "Descrição não pode estar vazia." };
  }

  const categoriasPermitidas = ["Camisas", "Saias", "Calças", "Sutiãs", "Calcinha", "Cropped", "meias"];
  if (!categoriasPermitidas.includes(categoria)) {
      return res.status(400).json({ message: 'Categoria inválida' });
  }
  return null; 
}


const postCategoria = async (req, res) => {
  try {
    const erro = validarCategoria(req, res);
    if (erro) return res.status(erro.status).json({ message: erro.message });

    const { tipo, descricao } = req.body;
    const newCategoria = new Categoria({ tipo, descricao });
    await newCategoria.save();

    res.json({
      message: "Nova categoria foi criada!",
      Categoria: newCategoria,
    });
  } catch (error) {
    res.status(500).json({
      message: "Categoria não foi criada.",
      error: error.message,
    });
  }
};

// Listar todas as categorias
const categoriaAllget = async (req, res) => {
  try {
    const categorias = await Categoria.find();
    res.json(categorias);
  } catch (error) {
    res.status(500).json({
      message: "Não foi possível listar as categorias.",
      error: error.message,
    });
  }
};

const getCategoria = async (req, res) => {
    
    try{
        const { id } = req.params;
        const categoria = await Categoria.findById({ _id: id });
        res.json(categoria);

    } catch(error){
        res.status(500).json({ message: 'Não foi possível encontrar esse categoria.', error: error.message });

    }

}

// Excluir categoria
const deleteCategoria = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "ID inválido." });
    }

    const categoria = await Categoria.findById(id);
    if (!categoria) {
      return res.status(404).json({ message: "Categoria não encontrada." });
    }

    await Categoria.deleteOne({ _id: id });

    res.json({
      message: `Categoria com ID ${id} foi deletada com sucesso!`,
    });
  } catch (error) {
    res.status(500).json({
      message: "Não foi possível deletar a categoria.",
      error: error.message,
    });
  }
};

// Atualizar categoria
const putCategoria = async (req, res) => {
  try {
    const { id } = req.params;
    const erro = validarCategoria(req, res);
    if (erro) return res.status(erro.status).json({ message: erro.message });

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "ID inválido." });
    }

    let categoriaAtualizada = await Categoria.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!categoriaAtualizada) {
      return res.status(404).json({ message: "Categoria não encontrada." });
    }

    res.status(200).json({
      message: "Categoria atualizada com sucesso!",
      Categoria: categoriaAtualizada,
    });
  } catch (error) {
    res.status(500).json({
      message: "Não foi possível atualizar a categoria.",
      error: error.message,
    });
  }
};

module.exports = {categoriaAllget, getCategoria, postCategoria, putCategoria, deleteCategoria};
