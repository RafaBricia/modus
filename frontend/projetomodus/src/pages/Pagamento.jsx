import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Pagamento.css";

function Pagamento() {
  const navigate = useNavigate();
  const [formaPagamento, setFormaPagamento] = useState("");

  return (
    <div className="pagamentoContainer">
      <h1>Pagamento</h1>

      {/* Botão Voltar ao Carrinho */}
      <div style={{ marginBottom: "1rem" }}>
        <button
          onClick={() => navigate("/carrinho")}
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

      {/* Resto da página de pagamento */}
      <div className="formasPagamento">
        {["cartao", "boleto", "pix"].map((forma) => (
          <label
            key={forma}
            className={`botaoForma ${
              formaPagamento === forma ? "selecionado" : ""
            }`}
          >
            <input
              type="radio"
              name="pagamento"
              value={forma}
              onChange={(e) => setFormaPagamento(e.target.value)}
            />
            {forma === "cartao" && "Cartão"}
            {forma === "boleto" && "Boleto"}
            {forma === "pix" && "PIX"}
          </label>
        ))}
      </div>

      {formaPagamento === "cartao" && (
        <div className="dadosPagamento">
          <input placeholder="Número do Cartão" />
          <input placeholder="Nome no Cartão" />
          <input placeholder="Validade (MM/AA)" />
          <input placeholder="CVV" />
        </div>
      )}

      {formaPagamento === "boleto" && (
        <div className="dadosPagamento">
          <h3>Boleto gerado com sucesso!</h3>
          <p>Você receberá o boleto por e-mail.</p>
          <button>Baixar Boleto</button>
        </div>
      )}

      {formaPagamento === "pix" && (
        <div className="dadosPagamento">
          <p>Chave PIX: 000.000.000-00</p>
          <img src="/qr-pix-exemplo.png" alt="QR Code PIX" width={200} />
        </div>
      )}

      {formaPagamento && (
        <button className="botaoConfirmar">
          Confirmar Pagamento
        </button>
      )}
    </div>
  );
}

export default Pagamento;


