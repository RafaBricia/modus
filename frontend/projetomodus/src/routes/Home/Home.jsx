import React from "react";
import Logo from "../../components/Logo/Logo";
import NavBar from "../../components/NavBar/NavBar";
import Card from "../../components/Card/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import style from './Home.module.css';
import { useNavigate } from "react-router-dom";

function Home() {
  function voltar() {
    const navigate = useNavigate();
    navigate('/');
  }

  return (
    <div>
      <FontAwesomeIcon icon={faArrowLeft} className={style.back} onClick={() => voltar()}/>
      <Logo />
      <NavBar></NavBar>
      <Card />
    </div>
  );
}

export default Home;