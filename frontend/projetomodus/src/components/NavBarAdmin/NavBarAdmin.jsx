import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faGear, faLayerGroup, faBox } from "@fortawesome/free-solid-svg-icons";
import style from "./NavBarAdmin.module.css";
import { useNavigate } from "react-router-dom";
import api from '../../services/api.js';
import ModalPerfilAdmin from "../ModalPerfilAdmin/ModalPerfilAdmin.jsx";

function NavBarAdmin() {
  const navigate = useNavigate();
  const [categorias, setCategorias] = useState([]);
  const [showModal, setShowModal] = useState(false); // Estado para controlar o modal

  async function getCategorias() {
    try {
      const response = await api.get('/categoria');
      setCategorias(response.data);
    } catch (error) {
      console.error("Erro ao buscar categorias:", error);
    }
  }

  const selecionarCategoria = (categoriaId, tipo) => {
    navigate(`/categoria/${tipo.toLowerCase()}`, { state: { categoriaId } });
  };

  const adicionarProduto = () => {
    navigate('/adicionar/produto');
  }

  const adicionarCategoria = () => {
    navigate('/adicionar/categoria');
  }

  const toggleModalPerfil = () => {
    setShowModal(!showModal); // Alterna o estado do modal
  }

  useEffect(() => {
    getCategorias();
  }, []);

  return (
    <>
      <div className={style.NavBarAdmin}>
        <div className={style.categories}>
          {categorias.map((categoria) => (
            <button 
              key={categoria._id}
              onClick={() => selecionarCategoria(categoria._id, categoria.tipo)}
            >
              {categoria.tipo}
            </button>
          ))}
        </div>
        <div className={style.profile}>
          <button className={style.iconButton} onClick={toggleModalPerfil}>
            <FontAwesomeIcon icon={faUser} />
          </button>

          <button className={style.iconButton} onClick={adicionarProduto}>
            <FontAwesomeIcon icon={faLayerGroup} />
          </button>
          
          <button className={style.iconButton} onClick={adicionarCategoria}>
            <FontAwesomeIcon icon={faBox} />
          </button>
        </div>
      </div>

      {/* Renderiza o modal condicionalmente */}
      {showModal && <ModalPerfilAdmin onClose={toggleModalPerfil} />}
    </>
  );
}

export default NavBarAdmin;