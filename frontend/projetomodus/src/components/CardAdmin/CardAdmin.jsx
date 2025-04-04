import style from '../CardAdmin/CardAdmin.module.css';
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from '../../services/api.js'; 
import ModalAdminEdit from "../ModalAdmin/ModalAdminEdit.jsx"

function CardAdmin() {
    const navigate = useNavigate();
    const [produtos, setProdutos] = useState([]);
    const [categoriaMap, setCategoriaMap] = useState({});
    const [produtoParaEditar, setProdutoParaEditar] = useState(null); 

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
            const map = {};
            response.data.forEach(c => {
                map[c._id] = c.tipo;
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
        setProdutoParaEditar(produto);
    }

    async function delProduto(produto) {
        try {
            await api.delete(`/produto/${produto._id}`);
            getProdutos(); // Atualiza a lista após exclusão
        } catch (error) {
            console.error("Erro ao excluir produto:", error);
        }
    }

    useEffect(() => {
        getProdutos(); // Adicionei esta chamada
        getCategorias();
    }, []);

    return (
        <div className={style.cardsContainer}>
            {produtos.length > 0 ? (
                produtos.map((p) => (
                    <div key={p._id} className={style.card}>
                        <img 
                            src={p.image} 
                            alt={p.nome}
                            className={style.productImage}
                            onError={(e) => {
                                e.target.src = '/placeholder-product.jpg';
                                console.error('Erro ao carregar imagem:', p.image);
                            }}
                        />
                        <div className={style.productInfo}>
                            <p className={style.detalhesProduto}>{p.nome}</p>
                            <p className={style.detalhesProduto}>
                                <b>Categoria: {getCategoria(p.categoria)}</b>
                            </p>
                            <p className={style.detalhesProduto}>Tamanhos: {p.tamanho}</p>
                            <p className={style.detalhesProduto}>Quantidade: {p.quantidade}</p>
                            <p className={style.detalhesProduto}>
                                <b>R$ {p.valor}</b>
                            </p>
                            <p className={style.detalhesProduto}>{p.descricao}</p>

                            <div className={style.buttonGroup}>
                                <button 
                                    className={style.buttonConfig} 
                                    onClick={() => mostrarModalEditar(p)}
                                >
                                    Editar
                                </button>
                                <button 
                                    className={style.buttonConfig} 
                                    onClick={() => delProduto(p)}
                                >
                                    Excluir
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p className={style.noProducts}>Nenhum produto cadastrado</p>
            )}

            {produtoParaEditar && (
                <ModalAdminEdit 
                    produto={produtoParaEditar} 
                    onClose={() => setProdutoParaEditar(null)}
                    onSave={() => {
                        setProdutoParaEditar(null);
                        getProdutos(); // Atualiza a lista após edição
                    }}
                />
            )}
        </div>
    );
}

export default CardAdmin;