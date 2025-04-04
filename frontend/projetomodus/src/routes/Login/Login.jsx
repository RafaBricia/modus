import { useState, useRef } from "react";
import styles from "./Login.module.css";
import api from "../../services/api";
import Logo from "../../components/Logo/Logo.jsx";
import { useNavigate } from "react-router-dom";

function Login() {
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
      const response = await api.post("/loginCliente", {
        email: email.trim(),
        senha: senha
      });
      
      localStorage.setItem("Authorization", `Bearer ${response.data.token}`);
      navigate("/home");
    } catch (error) {
      console.error("Erro no login:", error);
      setError(error.response?.data?.message || "Erro ao fazer login. Verifique suas credenciais.");
    }
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <Logo />        
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
            onClick={() => navigate("/cadastro")}
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

export default Login;