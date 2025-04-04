import React, { useState, useEffect } from "react";
import LogoAdmin from "../../components/LogoAdmin/LogoAdmin";
import { useNavigate } from "react-router-dom";
import api from '../../services/api';
import style from './ProdutoAdicionar.module.css';

function ProdutoAdicionar() {
    const navigate = useNavigate();
    const [produto, setProduto] = useState(null);
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        async function fetchCategorias() {
            try {
                const response = await api.get('/categoria');
                setCategorias(response.data);
            } catch (error) {
                console.error("Erro ao buscar categorias:", error);
                alert("Erro ao carregar categorias");
            } finally {
            }
        }
        fetchCategorias();
    }, []);

    const submitForm = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = {
            image: form.image.value,
            nome: form.nome.value,
            categoria: form.categoria.value,
            valor: parseFloat(form.valor.value),
            tamanho: form.tamanho.value,
            quantidade: parseInt(form.quantidade.value),
            descricao: form.descricao.value
        };

        try {
            await api.post('/produto', formData);
            alert('Produto adicionado com sucesso!');
            navigate('/homeAdmin');
        } catch (error) {
            console.error("Erro ao adicionar produto:", error);
            alert(`Erro ao adicionar produto: ${error.response?.data?.message || error.message}`);
        }
    };

    return (
        <div className={style.modalBackground}>
            <div className={style.modalContent}>
                <LogoAdmin />
                <h2>Adicionar Novo Produto</h2>  
                <form onSubmit={submitForm}>
                    <label>
                        Link da imagem:
                        <input 
                            type="url"
                            name="image" 
                            defaultValue={produto?.image || ""}
                            required
                            placeholder="https://exemplo.com/imagem.jpg"
                        />
                    </label>

                    <label>
                        Nome do produto:
                        <input 
                            type="text" 
                            name="nome" 
                            defaultValue={produto?.nome || ""}
                            required
                            minLength={3}
                            placeholder="Nome do produto"
                        />
                    </label>

                    <label>
                        Categoria:
                        <select
                            name="categoria" 
                            defaultValue=""
                            required
                        >
                            <option value="" disabled>Selecione uma categoria</option>
                            {categorias.map((categoria) => (
                                <option key={categoria._id} value={categoria._id}>
                                    {categoria.tipo}
                                </option>
                            ))}
                        </select>                       
                    </label>

                    <label>
                        Valor (R$):
                        <input 
                            type="number" 
                            name="valor" 
                            step="0.01"
                            defaultValue={produto?.valor || ""}
                            required
                            min="0.01"
                            placeholder="0.00"
                        />
                    </label>

                    <label>
                        Tamanho:
                        <input 
                            type="text" 
                            name="tamanho" 
                            defaultValue={produto?.tamanho || ""}
                            required
                            placeholder="P, M, G, etc."
                        />
                    </label>

                    <label>
                        Quantidade:
                        <input 
                            type="number" 
                            name="quantidade" 
                            defaultValue={produto?.quantidade || ""}
                            required
                            min="1"
                            placeholder="0"
                        />
                    </label>

                    <label className={style.pergunta}>
                        Descrição:
                        <textarea
                            name="descricao" 
                            defaultValue={produto?.descricao || ""}
                            required
                            rows={4}
                            placeholder="Descrição detalhada do produto"
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
                        >
                            Salvar
                        </button>

                    </div>
                </form>
                
            </div>
        </div>
    );
}

export default ProdutoAdicionar;