import React from "react";
import LogoAdmin from "../../components/LogoAdmin/LogoAdmin";
import NavBarAdmin from "../../components/NavBarAdmin/NavBarAdmin";
import CardAdmin from "../../components/CardAdmin/CardAdmin";

function HomeAdmin() {
  return (
    <div>
      <LogoAdmin />
      <NavBarAdmin></NavBarAdmin>
      <CardAdmin></CardAdmin>
    </div>
  );
}

export default HomeAdmin;