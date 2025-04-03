import style from '../CardAdmin/CardAdmin.module.css';
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from '../../services/api.js'; 
import ModalAdmin from "../ModalAdmin/ModalAdmin";

function CardAdmin() {
    const navigate = useNavigate();
    const [produtos, setProdutos] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [categoriaMap, setCategoriaMap] = useState({});
    const [produtoParaEditar, setProdutoParaEditar] = useState(null); // Adicionei este estado

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

    function getCategoria(categoriaId) {
        return categoriaMap[categoriaId] || 'Sem categoria';
    }

    function mostrarModalEditar(produto) {
        navigate('/editar/produto')
    }

    useEffect(() => {
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

                    <div>
                        <button 
                            className={style.buttonConfig} 
                            onClick={() => mostrarModalEditar(produto)} // Passe o produto aqui
                        >
                            Editar
                        </button>
                        <button className={style.buttonConfig}>
                            Excluir
                        </button>
                    </div>
                </div>
            ))}

            {produtoParaEditar && (
                <ModalAdmin 
                    produto={produtoParaEditar} 
                    onClose={() => setProdutoParaEditar(null)} 
                />
            )}
        </div>
    );
}

export default CardAdmin;