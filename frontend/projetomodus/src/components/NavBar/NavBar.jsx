import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import style from "./NavBar.module.css";
import { useNavigate } from "react-router-dom";
import api from '../../services/api.js';
import ModalPerfil from "../ModalPerfil/ModalPerfil.jsx";

function NavBar() {
  const navigate = useNavigate();
  const [categorias, setCategorias] = useState([]);
  const [showModal, setShowModal] = useState(false);

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

  const mostrarModalPerfil = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    getCategorias();
  }, []);

  return (
    <>
      <div className={style.navBar}>
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
          <button className={style.iconButton}>
            <FontAwesomeIcon icon={faShoppingCart} /> 
          </button>   

          <button 
            className={style.iconButton}
            onClick={mostrarModalPerfil}
          >
            <FontAwesomeIcon icon={faUser} />
          </button>
        </div>
      </div>

      {showModal && <ModalPerfil onClose={mostrarModalPerfil} />}
    </>
  );
}

export default NavBar;