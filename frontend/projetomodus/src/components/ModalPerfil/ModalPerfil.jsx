import { useNavigate } from "react-router-dom";
import style from './ModalPerfil.module.css';

function ModalPerfil(){
    const navigate = useNavigate();

    function deslogar(){
        localStorage.removeItem('token');
        navigate('/'); 
    }

    function irHome(){
        navigate('/home'); 
    }

    return(
        <div className={style.modalBackground}>
            <div className={style.modalContent}>
                <h2>Deseja sair da loja?</h2>
                <button onClick={() => deslogar()} className={style.button}>Sim</button>
                <button onClick={() => irHome()} className={style.button} >Não</button>
            </div>
        </div>
    );
}

export default ModalPerfil;