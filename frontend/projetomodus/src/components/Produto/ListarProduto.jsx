import React, { useEffect, useState} from "react";
import Card from "../Card/Card";

function ListarProduto(){

    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        fetch("")
        .then((response) => response.json())
        .then((data) => setProdutos(data))
        .catch(error => console.error("Erro ao buscar os produtos: ",error));
    }, []);
    
    return (
        <div>
            {produtos.map((produto) => (
                <Card
                    key={produto.id}
                    imageUrl={produto.imageUrl}
                    nomeProduto={produto.nomeProduto}
                    id={produto.id}
                    descricao={produto.descricao}
                />
            ))}
        </div>
    )
}

export default ListarProduto;