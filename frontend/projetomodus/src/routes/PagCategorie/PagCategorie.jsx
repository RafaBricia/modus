import style from "./PagCategorie.module.css";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function PagCategorie() {
    const navigate = useNavigate();
    const { nomeCategoria } = useParams(); // Captura a categoria da URL
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        fetch("SUA_URL_AQUI") // Substitua pela URL correta da API
            .then((response) => response.json())
            .then((data) => {
                // Filtrar os produtos pela categoria selecionada
                const produtosFiltrados = data.filter(produto => produto.categoria === nomeCategoria);
                setProdutos(produtosFiltrados);
            })
            .catch(error => console.error("Erro ao buscar os produtos: ", error));
    }, [nomeCategoria]); // Atualiza os produtos quando a categoria muda

    return (
        <div className={style.PagCategorie}>
            <h2>Categoria: {nomeCategoria}</h2>
            <div className={style.produtosContainer}>
                {produtos.map((produto) => (
                    <div key={produto.id} className={style.card}>
                        <img src={produto.imageUrl} alt={produto.nomeProduto} />
                        <h3>{produto.nomeProduto}</h3>
                        <p>ID do Produto: {produto.id}</p>
                        <p>{produto.descricao}</p>
                        <button onClick={() => navigate(`/produto/${produto.id}`)}>
                            Adicionar ao carrinho
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PagCategorie;