const jwt = require
const Cliente = require("../model/clienteModel");
const Administrador = require("../model/adminModel");

require('dotenv').config();

const secret = process.env.JWT_SECRET;

const loginCliente = async (req, res) => {
    const { email, senha } = req.body;
    try {

        let cliente = await Cliente.findOne({ email });

        if(!cliente) {
            return res.status(400).json({ message: "E-mail não cadastrado" });
        }

        cliente.isCorrectPassword(senha, function(err, same) {

            if(!same) {
                return res.status(401).json({ message: "E-mail ou senha inválidos" });
            }

            const token = jwt.sign({ email }, secret, { expiresIn: '1h' });
            return res.status(200).json({ message: "Login realizado com sucesso", cliente,token });
        });
    } catch (err) {
        return res.status(500).json({ message: "Erro ao buscar cliente" });
    }
}


const loginAdmin = async (req, res) => {
    const { email, senha } = req.body;
    try {

        let administrador = await Administrador.findOne({ email });

        if(!administrador) {
            return res.status(400).json({ message: "E-mail não cadastrado" });
        }

        administrador.isCorrectPassword(senha, function(err, same) {

            if(!same) {
                return res.status(401).json({ message: "E-mail ou senha inválidos" });
            }

            const token = jwt.sign({ email }, secret, { expiresIn: '1h' });
            return res.status(200).json({ message: "Login realizado com sucesso", administrador,token });
        });
    } catch (err) {
        return res.status(500).json({ message: "Erro ao buscar administrador" });
    }
}


module.exports = {
    loginCliente,
    loginAdmin
};