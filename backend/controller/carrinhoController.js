const Carrinho = require("../model/carrinhoModel.js");

function verificarQuantidadValida(qnt){
    return Number.isInteger(qnt) && (qnt.length > 0); // alterar dps conforme a qnt existente puxando no banco
}

function valorValido(valor){
    return typeof valor === "number" && !isNaN(valor) && (valor.length > 0);
}

function produtoExistente(id) {
    const produto = Produto.findById(id);
    return !!produto;
}

const postCarrinho = async (req, res) => {


    try{

        const { quantidade, valor, produto } = req.body;
      
        if (!quantidade || !valor || !produto ) {
             
            return res.status(400).json({
                message: 'Todos os campos são obrigatórios'
            })

        }

        if (!(verificarQuantidadValida(qnt))) {

            return res.status(400).json({
                message: 'Quantidade deve ser um valor positivo'
            })

        }

        if (!(valorValido(valor))) {

            return res.status(400).json({
                message: 'Valor precisa ser válido'
            })

        }

        if (!(produtoExistente(produto))) {

            return res.status(400).json({
                message: 'produto precisa existir.'
            })

        }

        const newCarrinho = new Carrinho({
            quantidade, 
            valor, 
            produto
        });

        await newCarrinho.save();

        res.json({
          message: "Novo Carrinho foi criado!",
          Carrinho: newCarrinho,
        });
      

    } catch(error) {

        res.status(500).res.json({
            message: 'Carrinho não foi criado.',
            error: error.message,
        })

    }

};


const getAllCarrinhos = async (req, res) => {

  try {

    const Carrinhos = await Carrinho.find();
    res.json(Carrinhos);

  } catch(error){
    res.status(500).json({
        message: 'Não é possível listar os Carrinhos.'
    })
  }


};



const deleteCarrinho = async (req, res) => {

    try{

        const { id } = req.params;

        await Carrinho.deleteOne({_id: id})
        res.json({ message: 'Carrinho foi deletado com sucesso!' });

    } catch(error){

        res.status(500).json({
            message: 'Não é possível listar os Carrinhoes.'
        })

    }

};


const putCarrinho = async (req, res) => {

    try{

        const { id } = req.params;
        const { quantidade, valor, produto } = req.body;
      
        if (!quantidade || !valor || !produto ) {
             
            return res.status(400).json({
                message: 'Todos os campos são obrigatórios'
            })

        }

        if (!(verificarQuantidadValida(qnt))) {

            return res.status(400).json({
                message: 'Quantidade deve ser um valor positivo'
            })

        }

        if (!(valorValido(valor))) {

            return res.status(400).json({
                message: 'Valor precisa ser válido'
            })

        }

        if (!(produtoExistente(produto))) {

            return res.status(400).json({
                message: 'produto precisa existir.'
            })

        }

        let Carrinho = await Carrinho.findByIdAndUpdate(id, { quantidade, valor, produto });
        
        res.status(200).json({
          message: 'Carrinho atualizado com sucesso!',
          Carrinho,
        });

    } catch(error){

        res.status(500).json({
            message: 'Não é possível listar os Carrinhoes.'
        })

    }
};

module.exports = { getAllCarrinhos, postCarrinho, putCarrinho, deleteCarrinho };
