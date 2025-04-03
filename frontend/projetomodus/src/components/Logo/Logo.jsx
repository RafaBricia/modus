import React from 'react';
import style from './Logo.module.css';
import { useNavigate } from 'react-router-dom';

function Logo() {
    const navigate = useNavigate();
    
    const goToHome = () => {
        navigate('/home');
    };
    
    return (
        <div className={style.logo}>
            <img 
                src="/logo.png" 
                alt="Logomarca" 
                onClick={goToHome}
                style={{ cursor: 'pointer' }}
            />
        </div>
    );
}

export default Logo;