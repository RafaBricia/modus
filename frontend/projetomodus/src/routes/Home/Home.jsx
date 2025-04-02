import React from "react";
import Logo from "../../components/Logo/Logo";
import NavBar from "../../components/NavBar/NavBar";
import Card from "../../components/Card/Card";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/"); // Redireciona para a página Home
  };

  return (
    <div>
      <Logo onClick={() => goToHome}/>
      <NavBar></NavBar>
      {/* <Card /> */}
    </div>
  );
}

export default Home;