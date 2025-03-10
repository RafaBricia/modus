const Produto = require("../model/ProdutoModel.js");

function verificarCategoria(categoria) {
    return typeof categoria === "string" && categoria.trim().length > 0;
}

function valorValido(valor) {
    return typeof valor === "number" && !isNaN(valor) && valor > 0;
}

function verificarDescricao(descricao) {
    return typeof descricao === "string" && descricao.trim().length > 0;
}

const postProduto = async (req, res) => {
    try {
        const { categoria, tamanho, descricao, valor, nome } = req.body;

        if (!categoria || !valor || !nome || !descricao || !tamanho) {
            return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
        }

        if (!verificarCategoria(categoria)) {
            return res.status(400).json({ message: 'Categoria deve ser válida.' });
        }

        if (!valorValido(valor)) {
            return res.status(400).json({ message: 'Valor deve ser um número positivo.' });
        }

        if (!verificarDescricao(descricao)) {
            return res.status(400).json({ message: 'Descrição precisa ser preenchida.' });
        }

        const newProduto = new Produto({ categoria, tamanho, descricao, valor, nome });
        await newProduto.save();

        res.json({ message: "Novo Produto foi criado!", Produto: newProduto });

    } catch (error) {
        res.status(500).json({ message: 'Produto não foi criado.', error: error.message });
    }
};

const getAllProdutos = async (req, res) => {
    try {
        const produtos = await Produto.find();
        res.json(produtos);
    } catch (error) {
        res.status(500).json({ message: 'Não foi possível listar os produtos.' });
    }
};

const deleteProduto = async (req, res) => {
    try {
        const { id } = req.params;
        await Produto.deleteOne({ _id: id });
        res.json({ message: 'Produto foi deletado com sucesso!' });
    } catch (error) {
        res.status(500).json({ message: 'Não foi possível deletar o produto.' });
    }
};

const putProduto = async (req, res) => {
    try {
        const { id } = req.params;
        const { categoria, tamanho, descricao, valor, nome } = req.body;

        if (!categoria || !valor || !nome || !descricao || !tamanho) {
            return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
        }

        if (!verificarCategoria(categoria)) {
            return res.status(400).json({ message: 'Categoria deve ser válida.' });
        }

        if (!valorValido(valor)) {
            return res.status(400).json({ message: 'Valor deve ser um número positivo.' });
        }

        if (!verificarDescricao(descricao)) {
            return res.status(400).json({ message: 'Descrição precisa ser preenchida.' });
        }

        const produtoAtualizado = await Produto.findByIdAndUpdate(id, { categoria, tamanho, descricao, valor, nome }, { new: true });

        if (!produtoAtualizado) {
            return res.status(404).json({ message: 'Produto não encontrado.' });
        }

        res.status(200).json({ message: 'Produto atualizado com sucesso!', Produto: produtoAtualizado });

    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar produto.', error: error.message });
    }
};

module.exports = { getAllProdutos, postProduto, putProduto, deleteProduto };
