import { Navigate } from "react-router-dom";

function PrivateRoute({ element }) {
  const token = localStorage.getItem("Authorization");


  if(!token){
    return  <Navigate to="/" />;

  }

  return element;
}

export default PrivateRoute;