import React from "react";
import LogoAdmin from "../../components/LogoAdmin/LogoAdmin";
import NavBarAdmin from "../../components/NavBarAdmin/NavBarAdmin";
import CardAdmin from "../../components/CardAdmin/CardAdmin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import style from './HomeAdmin.module.css';
import { useNavigate } from "react-router-dom";

function HomeAdmin() {
  const navigate = useNavigate();

  function voltar() {
    navigate('/');
  }
  return (
    <div>
      <FontAwesomeIcon icon={faArrowLeft} className={style.back} onClick={() => voltar()}/>
      <LogoAdmin />
      <NavBarAdmin></NavBarAdmin>
      <CardAdmin></CardAdmin>
    </div>
  );
}

export default HomeAdmin;