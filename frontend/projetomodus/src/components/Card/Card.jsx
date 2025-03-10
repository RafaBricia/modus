import style from "./Card.module.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Card() {
    const navigate = useNavigate();
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        fetch("SUA_URL_AQUI") // Substitua pela URL correta da API
            .then((response) => response.json())
            .then((data) => setProdutos(data))
            .catch(error => console.error("Erro ao buscar os produtos: ", error));
    }, []);

    return (
        <button onClick={() => navigate(`/produto`)}>
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
        </button>
    );
}

export default Card;

