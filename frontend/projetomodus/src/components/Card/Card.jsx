import style from "./Card.module.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from '../../services/api.js'; 

function Card() {
    const navigate = useNavigate();
    const [produtos, setProdutos] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [categoriaMap, setCategoriaMap] = useState({});

    async function getProdutos() {
        try {
            const response = await api.get('/produto');
            setProdutos(response.data);
        } catch (error) {
            console.error("Erro ao buscar produtos:", error);
        }
    }

    async function getCategorias() {
        try {
            const response = await api.get('/categoria');
            setCategorias(response.data);
            
            const map = {};
            response.data.forEach(cat => {
                map[cat._id] = cat.tipo;
            });
            setCategoriaMap(map);
        } catch (error) {
            console.error("Erro ao buscar categorias:", error);
        }
    }

    // Função síncrona para pegar o tipo
    function getCategoria(categoriaId) {
        return categoriaMap[categoriaId] || 'Sem categoria';
    }

    useEffect(() => {
        // Carrega dados quando o componente monta
        getCategorias();
        getProdutos();
    }, []);

    return (
        <div className={style.cardsContainer}>
            {produtos.map((produto) => (
                <div key={produto._id} className={style.card}>
                     <img 
                            src={produto.image} 
                            alt={produto.nome}
                            className={style.productImage}
                            onError={(e) => {
                                e.target.src = '/placeholder-product.jpg';
                                console.error('Erro ao carregar imagem:', produto.image);
                            }}
                        />
                    <p className={style.detalhesProduto}>{produto.nome}</p>
                    <p className={style.detalhesProduto}>
                        <b>Categoria: {getCategoria(produto.categoria)}</b>
                    </p>
                    <p className={style.detalhesProduto}>Tamanhos: {produto.tamanho}</p>
                    <p className={style.detalhesProduto}>Quantidade: {produto.quantidade}</p>
                    <p className={style.detalhesProduto}>
                        <b>R$ {produto.valor}</b>
                    </p>
                    <p className={style.detalhesProduto}>{produto.descricao}</p>

                    <div >
                        <button className={style.buttonAddCarrinho}>
                            Adicionar
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Card;