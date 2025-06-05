import { useState, useRef } from "react";
import styles from "./LoginAdmin.module.css";
import api from "../../services/api.js";
import Logo from "../../components/LogoAdmin/LogoAdmin.jsx";
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

  console.log("Tentando login com:", { email, senha });

  try {
    const response = await api.post("/loginAdmin", {
      email: email.trim(),
      senha: senha
    });

    console.log("Resposta da API:", response);              // Ver tudo da resposta
    console.log("Token recebido:", response.data.token);    // Ver token
    console.log("Administrador:", response.data.administrador); // Ver dados do admin

    // Verifica se veio o token
    if (response.data?.token) {
      localStorage.setItem("Authorization", `Bearer ${response.data.token}`);
      navigate("/homeAdmin");
    } else {
      throw new Error("Token não recebido do servidor");
    }
  } catch (error) {
    console.error("Erro no login:", error);
    console.log("Erro completo:", error.response?.data?.message ); // Ver conteúdo da resposta de erro
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