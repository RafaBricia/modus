import React from "react";
import style from "./Card.module.css";

function Card({ imageUrl, nomeProduto, id, descricao }) {
    return (
        <div className={style.card}>
            <img src={imageUrl} alt={nomeProduto} />
            <h3>{nomeProduto}</h3>
            <p>ID do Produto: {id}</p>
            <p>{descricao}</p>
        </div>
    );
}

export default Card;
