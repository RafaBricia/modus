import { useState } from "react";
import styles from "./CadastroAdmin.module.css";
import api from "../../services/api.js";
import Logo from "../../components/Logo/Logo.jsx";
import { useNavigate } from "react-router-dom";

function CadastroAdmin() {
  const [formData, setFormData] = useState({
    nome: "",
    cpf: "",
    email: "",
    senha: ""
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Função para validar CPF no frontend
  const validarCPF = (cpf) => {
    // Remove caracteres não numéricos
    const cpfLimpo = cpf.replace(/\D/g, '');
    return cpfLimpo.length === 11;
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);

    // Validações no frontend
    if (!validarCPF(formData.cpf)) {
      setError("CPF deve conter 11 dígitos numéricos");
      return;
    }

    try {
      // Envia o CPF como número
      const dadosParaEnviar = {
        ...formData,
        cpf: Number(formData.cpf.replace(/\D/g, ''))
      };

      const response = await api.post("/admin", dadosParaEnviar);
      PaginaLogin();
    } catch (error) {
      console.error("Erro no cadastro:", error);
      // Mostra a mensagem de erro específica do backend se existir
      setError(error.response?.data?.message || "Erro ao cadastrar. Verifique os dados e tente novamente.");
    }
  }

  function PaginaLogin() {
    navigate("/loginAdmin");
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <Logo />
        <label className={styles.title}>ADMINISTRADOR</label>        
        <label className={styles.label}>Nome:</label>
        <input
          type="text"
          name="nome"
          placeholder="Nome completo"
          value={formData.nome}
          onChange={handleChange}
          required
        />

        <label className={styles.label}>CPF:</label>
        <input
          type="text"  // Alterado para text para permitir formatação
          name="cpf"
          placeholder="CPF (apenas números)"
          value={formData.cpf}
          onChange={handleChange}
          required
          maxLength={11}
        />

        <label className={styles.label}>Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label className={styles.label}>Senha:</label>
        <input
          type="password"
          name="senha"
          placeholder="Senha"
          value={formData.senha}
          onChange={handleChange}
          required
          minLength={6}
          maxLength={10}
        />

        <label className={styles.label}>Já possui cadastro? 
          <button 
            type="button" 
            className={styles.btnCadastro}
            onClick={PaginaLogin}
          >
            Logue-se
          </button>
        </label>

        <button type="submit" className={styles.button}>
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default CadastroAdmin;