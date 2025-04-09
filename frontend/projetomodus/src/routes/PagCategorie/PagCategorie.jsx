import style from "./PagCategorie.module.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
import NavBar from "../../components/NavBar/NavBar";
import api from '../../services/api.js';

function PagCategorie() {
    const { nomeCategoria } = useParams();
    const [produtos, setProdutos] = useState([]);
    const [produtosFiltrados, setProdutosFiltrados] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [categoriaMap, setCategoriaMap] = useState({});

    async function getProdutos() {
        try {
            const response = await api.get('/produto');
            setProdutos(response.data);
            filtrarProdutos(response.data);
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

    function filtrarProdutos(todosProdutos) {
        if (!nomeCategoria) {
            setProdutosFiltrados(todosProdutos);
            return;
        }

        const categoria = categorias.find(cat => 
            cat.tipo.toLowerCase() === nomeCategoria.toLowerCase()
        );

        if (categoria) {
            const filtrados = todosProdutos.filter(produto => 
                produto.categoria === categoria._id
            );
            setProdutosFiltrados(filtrados);
        } else {
            setProdutosFiltrados(todosProdutos);
        }
    }

    useEffect(() => {
        getCategorias();
        getProdutos();
    }, []);

    useEffect(() => {
        if (produtos.length > 0 && categorias.length > 0) {
            filtrarProdutos(produtos);
        }
    }, [nomeCategoria, produtos, categorias]);

    async function adicionarAoCarrinho(produto) {
        try {
            console.log("Clicou em adicionar:", produto);
    
            const response = await api.get("/carrinho");
            const carrinhos = response.data;
    
            const existente = carrinhos.find(
                (item) => item.produto._id === produto._id
            );
    
            if (existente) {
                await api.put(`/carrinho/${existente._id}`, {
                    quantidade: existente.quantidade + 1,
                    valor: produto.valor,
                    produto: produto._id,
                });
            } else {
                await api.post("/carrinho", {
                    produto: produto._id,
                    quantidade: 1,
                    valor: produto.valor,
                });
            }
    
            alert("Produto adicionado ao carrinho!");
        } catch (error) {
            console.error("Erro ao adicionar produto ao carrinho:", error);
            alert("Erro ao adicionar produto ao carrinho!");
        }
    }
    

    return (
        <div>
            <Logo />
            <NavBar />
            <div className={style.cardsContainer}>
                {produtosFiltrados.map((produto) => (
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
                        <p className={style.detalhesProduto}>Tamanhos: {Array.isArray(produto.tamanho) ? produto.tamanho.join(', ') : produto.tamanho}</p>
                        <p className={style.detalhesProduto}>Quantidade: {produto.quantidade}</p>
                        <p className={style.detalhesProduto}>
                            <b>R$ {typeof produto.valor === 'number' ? produto.valor.toFixed(2) : produto.valor}</b>
                        </p>
                        <p className={style.detalhesProduto}>{produto.descricao}</p>

                        <div>
                        <button
  className={style.buttonAddCarrinho}
  onClick={() => adicionarAoCarrinho(produto)}
>
  Adicionar
</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PagCategorie;