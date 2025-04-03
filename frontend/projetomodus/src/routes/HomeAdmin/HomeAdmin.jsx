import React from "react";
import Logo from "../../components/Logo/Logo";
import NavBarAdmin from "../../components/NavBarAdmin/NavBarAdmin";
import CardAdmin from "../../components/CardAdmin/CardAdmin";

function HomeAdmin() {
  return (
    <div>
      <Logo />
      <NavBarAdmin></NavBarAdmin>
      <CardAdmin></CardAdmin>
    </div>
  );
}

export default HomeAdmin;