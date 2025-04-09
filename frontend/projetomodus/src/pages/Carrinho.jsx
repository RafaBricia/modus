import React, { useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import style from "../components/Card/Card.module.css";

function Carrinho() {
  const [itensAgrupados, setItensAgrupados] = useState([]);
  const navigate = useNavigate();

  // Carrega o carrinho
  const fetchCarrinho = async () => {
    try {
      const response = await api.get("/carrinho");
      const agrupados = {};

      response.data.forEach((item) => {
        const id = item.produto?._id;
        if (!id) return;

        if (!agrupados[id]) {
          agrupados[id] = {
            ...item,
            quantidade: item.quantidade,
            carrinhos: [item],
          };
        } else {
          agrupados[id].quantidade += item.quantidade;
          agrupados[id].carrinhos.push(item);
        }
      });

      setItensAgrupados(Object.values(agrupados));
    } catch (error) {
      console.error("Erro ao carregar carrinho", error);
    }
  };

  useEffect(() => {
    fetchCarrinho();
  }, []);

  const atualizarQuantidade = async (item, novaQtd) => {
    if (novaQtd < 1) return removerItem(item); // remove se for 0

    // Vamos pegar o primeiro carrinho associado àquele produto
    const carrinhoId = item.carrinhos[0]._id;

    try {
      await api.put(`/carrinho/${carrinhoId}`, {
        quantidade: novaQtd,
        valor: item.valor,
        produto: item.produto._id,
      });

      await fetchCarrinho(); // atualiza após alterar
    } catch (error) {
      console.error("Erro ao atualizar item", error);
    }
  };

  const removerItem = async (item) => {
    try {
      for (let carrinho of item.carrinhos) {
        await api.delete(`/carrinho/${carrinho._id}`);
      }

      await fetchCarrinho(); // atualiza
    } catch (error) {
      console.error("Erro ao remover item", error);
    }
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Checkout</h1>

      {/* Botão de Voltar - sempre visível */}
      <div style={{ marginBottom: "1rem" }}>
        <button
          onClick={() => navigate("/home")}
          style={{
            backgroundColor: "#000",
            color: "#fff",
            padding: "8px 16px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          ← Voltar
        </button>
      </div>

      {/* Verifica se o carrinho está vazio */}
      {itensAgrupados.length === 0 ? (
        <p>Seu carrinho está vazio!</p>
      ) : (
        <>
          {/* Cards dos produtos */}
          <div className={style.cardsContainer}>
            {itensAgrupados.map((item) => (
              <div key={item.produto._id} className={style.card}>
                <img
                  src={item.produto?.image || "/placeholder-product.jpg"}
                  alt={item.produto?.nome || "Produto"}
                  className={style.productImage}
                  onError={(e) => {
                    e.target.src = "/placeholder-product.jpg";
                  }}
                />
                <p className={style.detalhesProduto}>
                  <strong>{item.produto?.nome}</strong>
                </p>
                <p className={style.detalhesProduto}>
                  <b>Valor unitário:</b> R$ {item.valor.toFixed(2)}
                </p>
                <p className={style.detalhesProduto}>
                  <b>Subtotal:</b> R${" "}
                  {(item.valor * item.quantidade).toFixed(2)}
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginTop: "10px",
                  }}
                >
                  <button
                    onClick={() =>
                      atualizarQuantidade(item, item.quantidade - 1)
                    }
                  >
                    -
                  </button>
                  <span>{item.quantidade}</span>
                  <button
                    onClick={() =>
                      atualizarQuantidade(item, item.quantidade + 1)
                    }
                  >
                    +
                  </button>
                  <button
                    onClick={() => removerItem(item)}
                    style={{
                      color: "white",
                      fontSize: "18px",
                      backgroundColor: "black", // aqui adiciona o fundo preto
                      padding: "10px", // opcional: dá um espaçamento interno
                      border: "none", // opcional: tira a borda
                      borderRadius: "5px", // opcional: deixa o botão arredondado
                      cursor: "pointer", // opcional: muda o cursor quando passa o mouse
                    }}
                  >
                    Excluir
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Total geral */}
          <div
            style={{
              textAlign: "right",
              fontSize: "18px",
              marginBottom: "10px",
            }}
          >
            <strong>
              Total da Compra: R${" "}
              {itensAgrupados
                .reduce((acc, item) => acc + item.valor * item.quantidade, 0)
                .toFixed(2)}
            </strong>
          </div>

          {/* Botão de Finalizar */}
          <div style={{ textAlign: "right" }}>
            <button
              style={{
                backgroundColor: "#000",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
              onClick={() => navigate("/pagamento")}
            >
              Finalizar Compra
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Carrinho;
