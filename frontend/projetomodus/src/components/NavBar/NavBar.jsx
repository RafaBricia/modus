import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart,faUser } from "@fortawesome/free-solid-svg-icons";
import style from "./NavBar.module.css";
import { useNavigate } from "react-router-dom";

function NavBar() {
  
  const navigate = useNavigate();
  // const [categoria, setCategoria] = React.useState("Home");
  // const navigate = useNavigate();

  const selecionarCategoria = (categoria) => {
    navigate(`/${categoria}`); // Redireciona para a página Home
  }

  // const selecionarCategoria = (categoriaSelecionada) => {
  //   setCategoria(categoriaSelecionada);
  //   enviandoCategoriaSelecionada(categoriaSelecionada);  // Passa a categoria para o componente pai
  // };


  return (
    <div className={style.navBar}>
    <div className={style.categories}>

      <button onClick={() => selecionarCategoria("Camisas")}>Camisas</button>
      <button onClick={() => selecionarCategoria("Saias")}>Saias</button>
      <button onClick={() => selecionarCategoria("Sutiãs")}>Sutiãs</button>
      <button onClick={() => selecionarCategoria("Calcinhas")}>Calcinhas</button>
      <button onClick={() => selecionarCategoria("Meias")}>Meias</button>
      <button onClick={() => selecionarCategoria("Cropped")}>Cropped</button>
    
    </div>
    <div className={style.profile}>

      <button className={style.iconButton}>
        <FontAwesomeIcon icon={faShoppingCart} /> 
      </button>   

      <button className={style.iconButton}>
        <FontAwesomeIcon icon={faUser} />
      </button>

    </div>
    
    </div>
    
  );
}

export default NavBar;
