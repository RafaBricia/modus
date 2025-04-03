import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faGear } from "@fortawesome/free-solid-svg-icons";
import style from "./NavBarAdmin.module.css";
import { useNavigate } from "react-router-dom";
import api from '../../services/api.js';

// NavBarAdmin.js
function NavBarAdmin() {
  const navigate = useNavigate();
  const [categorias, setCategorias] = useState([]);

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

  useEffect(() => {
    getCategorias();
  }, []);

  return (
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

        <button className={style.iconButton}>
          <FontAwesomeIcon icon={faUser} />
        </button>


        <button className={style.iconButton}>
          <FontAwesomeIcon icon={faGear} />
        </button>

      </div>
    </div>
  );
}

export default NavBarAdmin;