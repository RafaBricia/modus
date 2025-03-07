import React from "react";
import Logo from "../../components/Logo/Logo";
import NavBar from "../../components/NavBar/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <div>
      <Logo />
      <NavBar>
      <button>Home</button>
        <a href="/camisas">Camisas</a>
        <a href="/saias">Saias</a>
        <a href="/sutias">Sutiãs</a>
        <a href="/calcinhas">Calcinhas</a>
        <a href="/meias">Meias</a>
        <a href="/cropped">Cropped</a>

        <FontAwesomeIcon icon={faShoppingCart} />
      </NavBar>
      
    </div>
  );
}

export default Home;