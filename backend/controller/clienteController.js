const Cliente = require("../model/clienteModel");

function verificarCPFValido(cpf){
    return Number.isInteger(cpf) && cpf.length === 11 && /^\d+$/.test(cpf)
}

function validarEmail(email){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email);
}

function validarSenha(senha){
    const regex = /^(?=.*[a-zA-Z])(?=.*\d).+$/;
    return regex.test(senha) && senha.trim().length > 0;
}

const postCliente = async (req, res) => {


    try{

        const { nome, cpf, senha, email } = req.body;
      
        if (!nome || !cpf || !senha || !email) {
             
            return res.status(400).json({
                message: 'Todos os campos são obrigatórios'
            })

        }

        if (!(verificarCPFValido(cpf))) {

            return res.status(400).json({
                message: 'CPF precisa ser um número e ter 11 caracteres'
            })

        }

        if (!(validarEmail(email))) {

            return res.status(400).json({
                message: 'email precisa ser válido'
            })

        }

        if (!(validarSenha(senha))) {

            return res.status(400).json({
                message: 'Senha precisa ser válida. Maior que 5 caracteres e menor que 10'
            })

        }

        const newCliente = new Cliente({
          nome,
          cpf,
          senha,
          email
        });

        await newCliente.save();

        res.json({
          message: "Novo Clienteistrador foi criado!",
          Cliente: newCliente,
        });
      

    } catch(error) {

        res.status(500).res.json({
            message: 'Clienteistrador não foi criado.',
            error: error.message,
        })

    }

};


const getAllClientes = async (req, res) => {

  try {

    const Clientes = await Cliente.find();
    res.json(Clientes);

  } catch(error){
    res.status(500).json({
        message: 'Não é possível listar os Clienteistradores.'
    })
  }


};



const deleteCliente = async (req, res) => {

    try{

        const { id } = req.params;

        await Cliente.deleteOne({_id: id})
        res.json({ message: 'Clienteistrador foi deletado com sucesso!' });

    } catch(error){

        res.status(500).json({
            message: 'Não é possível listar os Clienteistradores.'
        })

    }

};


const putCliente = async (req, res) => {

    try{

        const { id } = req.params;
        const { nome, cpf, senha, email } = req.body;

        if (!nome || !cpf || !senha || !email) {
             
            return res.status(400).json({
                message: 'Todos os campos são obrigatórios'
            })

        }

        if (!(verificarCPFValido(cpf))) {

            return res.status(400).json({
                message: 'CPF precisa ser um número e ter 11 caracteres'
            })

        }

        if (!(validarEmail(email))) {

            return res.status(400).json({
                message: 'email precisa ser válido'
            })

        }

        if (!(validarSenha(senha))) {

            return res.status(400).json({
                message: 'Senha precisa ser válida. Maior que 5 caracteres e menor que 10'
            })

        }
      
        let Cliente = await Cliente.findByIdAndUpdate(id, { nome, cpf, senha, email });
        
        res.status(200).json({
          message: 'Clienteistrador atualizado com sucesso!',
          Cliente,
        });

    } catch(error){

        res.status(500).json({
            message: 'Não é possível listar os Clienteistradores.'
        })

    }
};

module.exports = { getAllClientes, postCliente, putCliente, deleteCliente };
