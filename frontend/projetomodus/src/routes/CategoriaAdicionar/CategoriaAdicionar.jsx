import React, { useState, useEffect } from "react";
import LogoAdmin from "../../components/LogoAdmin/LogoAdmin";
import { useNavigate } from "react-router-dom";
import api from '../../services/api';
import style from './CategoriaAdicionar.module.css';

function CategoriaAdicionar() {
    const navigate = useNavigate();
    const [tipo, setTipo] = useState("");
    const [categorias, setCategorias] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchCategorias() {
            try {
                const response = await api.get('/categoria');
                setCategorias(response.data);
            } catch (error) {
                console.error("Erro ao buscar categorias:", error);
                setError("Erro ao carregar categorias");
            }
        }
        fetchCategorias();
    }, []);

    const submitForm = async (e) => {
        e.preventDefault();
        
        // Verifica se a categoria já existe
        if (categorias.some(cat => cat.tipo.toLowerCase() === tipo.toLowerCase())) {
            setError("Esta categoria já existe");
            return;
        }

        try {
            await api.post('/categoria', { tipo });
            alert('Categoria adicionada com sucesso!');
            navigate('/homeAdmin');
        } catch (error) {
            console.error("Erro ao adicionar categoria:", error);
            setError(error.response?.data?.message || "Erro ao adicionar categoria");
        }
    };

    return (
        <div className={style.modalBackground}>
            <div className={style.modalContent}>
                <LogoAdmin />
                <h2>Adicionar Nova Categoria</h2>
                
                {error && <p className={style.error}>{error}</p>}

                <form onSubmit={submitForm}>
                    <label>
                        Tipo:
                        <input 
                            type="text" 
                            name="tipo" 
                            value={tipo}
                            onChange={(e) => setTipo(e.target.value)}
                            required
                            minLength={3}
                            placeholder="Digite o nome da categoria"
                        />
                    </label>

                    <div className={style.modalButtons}>
                        <button 
                            type="button" 
                            className={style.button} 
                            onClick={() => navigate('/homeAdmin')}
                        >
                            Cancelar
                        </button>
                        <button 
                            type="submit" 
                            className={style.button}
                            disabled={!tipo.trim()}
                        >
                            Salvar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CategoriaAdicionar;