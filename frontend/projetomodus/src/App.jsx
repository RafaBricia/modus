
import './App.css'
import Home from './routes/Home/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PagCategorie from './routes/PagCategorie/PagCategorie';
import PagInicial from './routes/paginaInicial/pagInicial';
import HomeAdmin from './routes/HomeAdmin/HomeAdmin';
import ModalAdminEdit from './components/ModalAdmin/ModalAdminEdit';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/categoria/:nomeCategoria" element={<PagCategorie />} />
        <Route path="/" element={<PagInicial />} />
        <Route path="/homeAdmin" element={<HomeAdmin />} />
        <Route path="/editar/produto" element={<ModalAdminEdit />} />

        
      </Routes>
    </Router>
  );
}

export default App;
