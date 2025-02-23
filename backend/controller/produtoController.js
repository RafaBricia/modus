const Produto = require("../model/ProdutoModel.js");

function verificarCategoria(qnt){
    return Number.isInteger(qnt) && (qnt.length > 0); // alterar dps conforme a qnt existente puxando no banco
}

function valorValido(valor){
    return typeof valor === "number" && !isNaN(valor) && (valor.length > 0);
}

function produtoExistente(pdt){
    //perguntar a professora sobre essa função, se deve puxar pelo id
}

function verificarDescricao(dsc){
// criar função para ver se não foi preenchido só com espaços

}



const postProduto = async (req, res) => {


    try{

        const { categoria, tamanho, descricao, valor, nome } = req.body;
      
        if (!categoria || !valor || !nome || !descricao || !tamanho ) {
             
            return res.status(400).json({
                message: 'Todos os campos são obrigatórios'
            })

        }

        if (!(verificarCategoria(categoria))) {

            return res.status(400).json({
                message: 'Quantidade deve ser um válido.'
            })

        }

        if (!(valorValido(valor))) {

            return res.status(400).json({
                message: 'Valor precisa ser válido'
            })

        }

        if (!(verificarDescricao(descricao))) {

            return res.status(400).json({
                message: 'Descrição precisa ser preenchida.'
            })

        }

        if (!(produtoExistente(pdt))) {

            return res.status(400).json({
                message: 'Produto precisa existir.'
            })

        }


        const newProduto = new Produto({
            categoria, 
            tamanho, 
            descricao, 
            valor, 
            nome
        });

        await newProduto.save();

        res.json({
          message: "Novo Produto foi criado!",
          Produto: newProduto,
        });
      

    } catch(error) {

        res.status(500).res.json({
            message: 'Produto não foi criado.',
            error: error.message,
        })

    }

};


const getAllProdutos = async (req, res) => {

  try {

    const Produtos = await Produto.find();
    res.json(Produtos);

  } catch(error){
    res.status(500).json({
        message: 'Não é possível listar os Produtos.'
    })
  }


};



const deleteProduto = async (req, res) => {

    try{

        const { id } = req.params;

        await Produto.deleteOne({_id: id})
        res.json({ message: 'Produto foi deletado com sucesso!' });

    } catch(error){

        res.status(500).json({
            message: 'Não é possível listar os Produtoes.'
        })

    }

};


const putProduto = async (req, res) => {

    try{

        const { id } = req.params;
        const { categoria, tamanho, descricao, valor, nome } = req.body;
      
        if ( !categoria || !valor || !nome || !descricao || !tamanho ) {
             
            return res.status(400).json({
                message: 'Todos os campos são obrigatórios'
            })

        }

        if (!(verificarCategoria(categoria))) {

            return res.status(400).json({
                message: 'Quantidade deve ser um válido.'
            })

        }

        if (!(valorValido(valor))) {

            return res.status(400).json({
                message: 'Valor precisa ser válido'
            })

        }

        if (!(verificarDescricao(descricao))) {

            return res.status(400).json({
                message: 'Descrição precisa ser preenchida.'
            })

        }

        if (!(produtoExistente(pdt))) {

            return res.status(400).json({
                message: 'Produto precisa existir.'
            })

        }

        let Produto = await Produto.findByIdAndUpdate(id, { categoria, tamanho, descricao, valor, nome });
        
        res.status(200).json({
          message: 'Produto atualizado com sucesso!',
          Produto,
        });

    } catch(error){

        res.status(500).json({
            message: 'Não é possível listar os Produtos.'
        })

    }
};

module.exports = { getAllProdutos, postProduto, putProduto, deleteProduto };
