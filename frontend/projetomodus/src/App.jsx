
import './App.css'
import Home from './routes/Home/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PagCategorie from './routes/PagCategorie/PagCategorie';
import PagInicial from './routes/paginaInicial/pagInicial';
import HomeAdmin from './routes/HomeAdmin/HomeAdmin';
import ModalAdminEdit from './components/ModalAdmin/ModalAdminEdit';
import Login from './routes/Login/Login';
import Cadastro from './routes/Cadastro/Cadastro';
import CadastroAdmin from './routes/CadastroAdmin/CadastroAdmin';
import LoginAdmin from './routes/LoginAdmin/LoginAdmin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/categoria/:nomeCategoria" element={<PagCategorie />} />
        <Route path="/" element={<PagInicial />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loginAdmin" element={<LoginAdmin />} />
        <Route path="/homeAdmin" element={<HomeAdmin />} />
        <Route path="/editar/produto" element={<ModalAdminEdit />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/cadastroAdmin" element={<CadastroAdmin />} />

      </Routes>
    </Router>
  );
}

export default App;
