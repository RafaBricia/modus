const Admin = require("../model/adminModel");

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

const postAdmin = async (req, res) => {


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

        const newAdmin = new Admin({
          nome,
          cpf,
          senha,
          email
        });

        await newAdmin.save();

        res.json({
          message: "Novo administrador foi criado!",
          Admin: newAdmin,
        });
      

    } catch(error) {

        res.status(500).res.json({
            message: 'Administrador não foi criado.',
            error: error.message,
        })

    }

};


const getAllAdmins = async (req, res) => {

  try {

    const admins = await Admin.find();
    res.json(admins);

  } catch(error){
    res.status(500).json({
        message: 'Não é possível listar os administradores.'
    })
  }


};



const deleteAdmin = async (req, res) => {

    try{

        const { id } = req.params;

        await Admin.deleteOne({_id: id})
        res.json({ message: 'Administrador foi deletado com sucesso!' });

    } catch(error){

        res.status(500).json({
            message: 'Não é possível listar os administradores.'
        })

    }

};


const putAdmin = async (req, res) => {

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
      
        let Admin = await Task.findByIdAndUpdate(id, { nome, cpf, senha, email });
        
        res.status(200).json({
          message: 'Administrador atualizado com sucesso!',
          Admin,
        });

    } catch(error){

        res.status(500).json({
            message: 'Não é possível listar os administradores.'
        })

    }
};

module.exports = { getAllAdmins, postAdmin, putAdmin, deleteAdmin };
