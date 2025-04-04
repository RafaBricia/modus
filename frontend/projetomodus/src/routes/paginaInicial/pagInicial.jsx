import Logo from "../../components/Logo/Logo";
import { useNavigate } from "react-router-dom";
import style from './pagInicial.module.css';

function PagInicial(){

    const navigate = useNavigate();

    function loginAdmin(){
        navigate('/loginAdmin');
    }

    function loginCliente(){
        navigate('/login');
    }
    return(
        <>
        <div className={style.containerInicial}>
            <h1>Bem-vindo à loja Modus</h1>
            <p className={style.paragAcesso}>Escolha o seu acesso:</p>
            <button onClick={() => loginAdmin()} className={style.btnLogin}>Administrador</button>
            <button onClick={() => loginCliente()} className={style.btnLogin}> Cliente</button>
        </div>
        
        </>
    )
}

export default PagInicial;