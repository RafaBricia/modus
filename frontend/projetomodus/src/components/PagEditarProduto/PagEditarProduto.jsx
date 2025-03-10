import React, { useState } from 'react';
import style from "./PagEditarProduto.module.css";

function PagEditarProduto() {
    const categorias = ["Camisas", "Calça", "Saias", "Meias", "Calcinha", "Sutiã", "Cropped"];
    const tamanhos = ["P", "M", "G", "GG", "XG"];
    
    const [produto, setProduto] = useState({
        nome: "",
        categoria: "",
        tamanho: "",
        descricao: ""
    });

    const handleChange = (e) => {
        setProduto({ ...produto, [e.target.name]: e.target.value });
    };

    const handleEdit = () => {
        console.log("Produto editado:", produto);
    };

    const handleDelete = () => {
        console.log("Produto excluído");
    };

    return (
        <div className={style.PagEditarProduto}>
            <img alt="logo" src="../Logo/Logo.png" className={style.logo} />
            
            <label className={style.label}>Nome da peça:</label>
            <input 
                type="text" 
                name="nome" 
                value={produto.nome} 
                onChange={handleChange} 
                className={style.input}
            />
            
            <label className={style.label}>Categoria:</label>
            <div className={style.options}>
                {categorias.map((cat) => (
                    <button 
                        key={cat} 
                        onClick={() => setProduto({ ...produto, categoria: cat })}
                        className={produto.categoria === cat ? style.selected : style.option}
                    >
                        {cat}
                    </button>
                ))}
            </div>
            
            <label className={style.label}>Tamanho:</label>
            <div className={style.options}>
                {tamanhos.map((tam) => (
                    <button 
                        key={tam} 
                        onClick={() => setProduto({ ...produto, tamanho: tam })}
                        className={produto.tamanho === tam ? style.selected : style.option}
                    >
                        {tam}
                    </button>
                ))}
            </div>
            
            <label className={style.label}>Descrição:</label>
            <textarea 
                name="descricao" 
                value={produto.descricao} 
                onChange={handleChange} 
                className={style.textarea}
            />
            
            <div className={style.buttons}>
                <button onClick={handleEdit} className={style.editButton}>Editar Produto</button>
                <button onClick={handleDelete} className={style.deleteButton}>Excluir Produto</button>
            </div>
        </div>
    );
}

export default PagEditarProduto;
