import React from 'react';
import style from './LogoAdmin.module.css';
import { useNavigate } from 'react-router-dom';

function LogoAdmin() {
    const navigate = useNavigate();
    
    const goToHome = () => {
        navigate('/homeAdmin');
    };
    
    return (
        <div className={style.logo}>
            <img 
                src="/logo.png" 
                alt="Logomarca" 
                onClick={goToHome}
                style={{ cursor: 'pointer' }}
            />
            <p className={style.titleAdmin}>ADMINISTRADOR</p>
        </div>
    );
}

export default LogoAdmin;