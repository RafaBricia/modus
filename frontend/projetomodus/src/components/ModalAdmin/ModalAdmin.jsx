import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./ModalAdmin.module.css";

function ModalAdmin() {
    const navigate = useNavigate();
    const [produtos, setProdutos] = useState([]);
    const [produtoSelecionado, setProdutoSelecionado] = useState(null); // Estado para o produto do modal

    useEffect(() => {
        fetch("SUA_URL_AQUI") // Substitua pela URL correta da API
            .then((response) => response.json())
            .then((data) => setProdutos(data))
            .catch(error => console.error("Erro ao buscar os produtos: ", error));
    }, []);

    return (
        <div className={style.ModalAdmin}>
            {produtos.map((produto) => (
                <div key={produto.id} className={style.card} onClick={() => setProdutoSelecionado(produto)}>
                    <h3>{produto.nomeProduto}</h3>
                    <p>{produto.descricao}</p>
                </div>
            ))}

            {/* Modal - Só aparece se houver um produto selecionado */}
            <Modal show={!!produtoSelecionado} onHide={() => setProdutoSelecionado(null)}>
                <Modal.Header closeButton>
                    <Modal.Title>{produtoSelecionado?.nomeProduto}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>ID do Produto: {produtoSelecionado?.id}</p>
                    <h3>{produtoSelecionado?.categoria}</h3>
                </Modal.Body>

                <Modal.Footer>
                    <p>{produtoSelecionado?.descricao}</p>
                    <Button variant="primary" onClick={() => navigate(`/produto/${produtoSelecionado?.id}`)}>
                        Adicionar ao carrinho
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ModalAdmin;


