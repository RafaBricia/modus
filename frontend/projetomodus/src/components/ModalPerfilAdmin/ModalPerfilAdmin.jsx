import { useNavigate } from "react-router-dom";
import style from './ModalPerfilAdmin.module.css';

function ModalPerfilAdmin(){
    const navigate = useNavigate();

    function deslogar(){
        localStorage.removeItem('token');
        navigate('/'); 
    }

    function irHome(){
        navigate('/homeAdmin'); 
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

export default ModalPerfilAdmin;