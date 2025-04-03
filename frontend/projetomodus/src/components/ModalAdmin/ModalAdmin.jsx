import React from "react";
import style from "./ModalAdmin.module.css";
import Logo from "../Logo/Logo";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

function ModalAdmin({ produto }) {
    const navigate = useNavigate();

    const submitForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = {
            image: form.image.value,
            nome: form.nome.value,
            categoria: form.categoria.value,
            valor: form.valor.value,
            tamanho: form.tamanho.value,
            quantidade: form.quantidade.value,
            descricao: form.descricao.value
        };

        api.put(`/produto/${produto._id}`, formData)
            .then(() => navigate('/homeAdmin'))
            .catch(error => {
                console.error("Erro ao salvar:", error);
                alert("Erro ao salvar as alterações");
            });
    };

    return (
        <div className={style.modalBackground}>
            <div className={style.modalContent}>
                <Logo />
                <form onSubmit={submitForm}>
                    <label>
                        Link da imagem:
                        <input 
                            type="text" 
                            name="image" 
                            defaultValue={produto?.image || ""}
                        />
                    </label>

                    <label>
                        Nome da peça:
                        <input 
                            type="text" 
                            name="nome" 
                            defaultValue={produto?.nome || ""}
                        />
                    </label>

                    <label>
                        Categoria:
                        <input 
                            type="text" 
                            name="categoria" 
                            defaultValue={produto?.categoria || ""}
                        />
                    </label>

                    <label>
                        Valor:
                        <input 
                            type="text" 
                            name="valor" 
                            defaultValue={produto?.valor || ""}
                        />
                    </label>

                    <label>
                        Tamanho:
                        <input 
                            type="text" 
                            name="tamanho" 
                            defaultValue={produto?.tamanho || ""}
                        />
                    </label>

                    <label>
                        Quantidade:
                        <input 
                            type="text" 
                            name="quantidade" 
                            defaultValue={produto?.quantidade || ""}
                        />
                    </label>

                    <label className={style.pergunta}>
                        Descrição:
                        <input 
                            type="text" 
                            name="descricao" 
                            defaultValue={produto?.descricao || ""}
                        />
                    </label>

                    <div className={style.buttonGroup}>
                        <button 
                            type="button" 
                            className={style.button} 
                            onClick={() => navigate('/homeAdmin')}
                        >
                            Cancelar
                        </button>
                        <button 
                            type="submit" 
                            className={style.button}
                        >
                            Salvar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ModalAdmin;