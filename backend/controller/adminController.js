const Administrador = require("../model/adminModel.js");


function verificarCPFValido(cpf) {
    try{
        return typeof cpf === "string" && cpf.length === 11 && /^\d+$/.test(cpf);

    }catch(error){
        return error

    }
}

function validarEmail(email) {
    try{
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);

    }catch(error){
        return error

    }
}

function validarSenha(senha) {
    try{
        const regex = /^(?=.*[a-zA-Z])(?=.*\d).{6,10}$/; 
        return regex.test(senha);

    }catch(error){
        return error

    }
}

const postAdministrador = async (req, res) => {
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

        const newAdministrador = new Administrador({ nome, cpf, senha, email });
        await newAdministrador.save();

        res.json({ message: "Novo Administrador criado!", Administrador: newAdministrador });

    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar Administrador.', error: error.message });
    }
}

const getAllAdministrador = async (req, res) => {
    try {
        const administradores = await Administrador.find();
        res.json(administradores);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao listar os administradores.' });
    }
}

const getAdministrador = async (req, res) => {
    try{
        const { id } = req.params;
        const administrador = await Administrador.findById({ _id: id });
        res.json(administrador);

    } catch(error){
        res.status(500).json({ message: 'Não foi possível encontrar esse administrador.', error: error.message });

    }
}

const deleteAdministrador = async (req, res) => {
    try {
        const { id } = req.params;
        await Administrador.deleteOne({ _id: id });
        res.json({ message: 'Administrador deletado com sucesso!' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar Administrador.' });
    }
}

const putAdministrador = async (req, res) => {
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


        const adminAtualizado = await Administrador.findByIdAndUpdate(id, { nome, cpf, senha, email }, { new: true });

        res.status(200).json({ message: 'Administrador atualizado com sucesso!', Administrador: adminAtualizado });

    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar Administrador.' });
    }
}

module.exports = { getAdministrador, getAllAdministrador, deleteAdministrador, putAdministrador, postAdministrador };
