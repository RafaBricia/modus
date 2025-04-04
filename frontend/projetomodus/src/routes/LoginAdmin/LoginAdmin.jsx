import { useState, useRef } from "react";
import styles from "./LoginAdmin.module.css";
import api from "../../services/api.js";
import Logo from "../../components/Logo/Logo.jsx";
import { useNavigate } from "react-router-dom";

function LoginAdmin() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState(null);
  const inputEmail = useRef(null);
  const inputSenha = useRef(null);

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);

    try {
      const response = await api.post("/loginAdmin", {
        email: email.trim(),
        senha: senha
      });
      
      localStorage.setItem("Authorization", `Bearer ${response.data.token}`);
      navigate("/homeAdmin");
    } catch (error) {
      console.error("Erro no login:", error);
      setError(error.response?.data?.message || "Erro ao fazer login. Verifique suas credenciais.");
    }
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <Logo /> 
        <label className={styles.title}>
          ADMINISTRADOR
        </label>
                 
        {error && <p className={styles.error}>{error}</p>}

        <label className={styles.label}>Email:</label>
        <input
          type="email"
          placeholder="Email"
          ref={inputEmail}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label className={styles.label}>Senha:</label>
        <input
          type="password"
          placeholder="Senha"
          ref={inputSenha}
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />

        <label className={styles.label}>
          Não possui cadastro? 
          <button 
            type="button"
            className={styles.btnCadastro}
            onClick={() => navigate("/cadastroAdmin")}
          >
            Cadastre-se
          </button>
        </label>

        <button type="submit" className={styles.button}>
          Entrar
        </button>
      </form>
    </div>
  );
}

export default LoginAdmin;