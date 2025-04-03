import style from '../CardAdmin/CardAdmin.module.css';
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from '../../services/api.js'; 
import ModalAdminEdit from "../ModalAdmin/ModalAdminEdit.jsx"
// import ModalAdminAdd from "../ModalAdmin/ModalAdminAdd.jsx"

function CardAdmin() {
    const navigate = useNavigate();
    const [produtos, setProdutos] = useState([]);
    const [produto, setProduto] = useState([]);
    const [categorias, setCategorias] = useState([]);
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
            setCategorias(response.data);
            
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
        navigate('/editar/produto')
    }

    function delProduto(produto) {
        const idProduto = produto._id;
        const responseProduto = api.delete(`/produto/${idProduto}`);
        setProduto(responseProduto)
        getProdutos();
    }

    useEffect(() => {
        getCategorias();
    }, []);

    return (
        <div className={style.cardsContainer}>
            {produtos.map((p) => (
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

                    <div>
                        <button 
                            className={style.buttonConfig} 
                            onClick={() => mostrarModalEditar(p)} // Passe o p aqui
                        >
                            Editar
                        </button>
                        <button className={style.buttonConfig} 
                        onClick={() => {delProduto(p)} }>
                            Excluir
                        </button>
                        {/* <button 
                            className={style.buttonConfig} 
                            onClick={() => mostrarModalEditar(p)} // Passe o produto aqui
                        >
                            Adicionar Produto
                        </button> */}
                    </div>
                </div>
            ))}

            {produtoParaEditar && (
                <ModalAdminEdit 
                    produto={produtoParaEditar} 
                    onClose={() => setProdutoParaEditar(null)} 
                />
            )}
        </div>
    );
}

export default CardAdmin;