const Cliente = require("../model/clienteModel");

function verificarCPFValido(cpf) {
    return typeof cpf === "string" && cpf.length === 11 && /^\d+$/.test(cpf);
}

function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validarSenha(senha) {
    const regex = /^(?=.*[a-zA-Z])(?=.*\d).{6,10}$/; // Senha entre 6 e 10 caracteres, letras e números
    return regex.test(senha);
}

const postCliente = async (req, res) => {
    try {
        const { nome, cpf, senha, email } = req.body;

        if (!nome || !cpf || !senha || !email) {
            return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
        }

        if (!verificarCPFValido(cpf)) {
            return res.status(400).json({ message: 'CPF deve conter 11 dígitos numéricos' });
        }

        if (!validarEmail(email)) {
            return res.status(400).json({ message: 'E-mail inválido' });
        }

        if (!validarSenha(senha)) {
            return res.status(400).json({ message: 'A senha deve ter entre 6 e 10 caracteres, incluindo letras e números' });
        }

        const newCliente = new Cliente({ nome, cpf, senha, email });
        await newCliente.save();

        res.json({ message: "Novo Cliente criado!", Cliente: newCliente });

    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar Cliente.', error: error.message });
    }
};

const getAllClientes = async (req, res) => {
    try {
        const clientes = await Cliente.find();
        res.json(clientes);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao listar os Clientes.' });
    }
};

const deleteCliente = async (req, res) => {
    try {
        const { id } = req.params;
        await Cliente.deleteOne({ _id: id });
        res.json({ message: 'Cliente deletado com sucesso!' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar Cliente.' });
    }
};

const putCliente = async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, cpf, senha, email } = req.body;

        if (!nome || !cpf || !senha || !email) {
            return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
        }

        if (!verificarCPFValido(cpf)) {
            return res.status(400).json({ message: 'CPF deve conter 11 dígitos numéricos' });
        }

        if (!validarEmail(email)) {
            return res.status(400).json({ message: 'E-mail inválido' });
        }

        if (!validarSenha(senha)) {
            return res.status(400).json({ message: 'A senha deve ter entre 6 e 10 caracteres, incluindo letras e números' });
        }

        const clienteAtualizado = await Cliente.findByIdAndUpdate(id, { nome, cpf, senha, email }, { new: true });

        res.status(200).json({ message: 'Cliente atualizado com sucesso!', Cliente: clienteAtualizado });

    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar Cliente.' });
    }
};

module.exports = { getAllClientes, postCliente, putCliente, deleteCliente };
