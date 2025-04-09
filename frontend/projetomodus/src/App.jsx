import "./App.css";
import Home from "./routes/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PagCategorie from "./routes/PagCategorie/PagCategorie";
import PagInicial from "./routes/paginaInicial/pagInicial";
import HomeAdmin from "./routes/HomeAdmin/HomeAdmin";
import ModalAdminEdit from "./components/ModalAdmin/ModalAdminEdit";
import Login from "./routes/Login/Login";
import Cadastro from "./routes/Cadastro/Cadastro";
import CadastroAdmin from "./routes/CadastroAdmin/CadastroAdmin";
import LoginAdmin from "./routes/LoginAdmin/LoginAdmin";
import ProdutoAdd from "./routes/ProdutoAdicionar/ProdutoAdicionar";
import CategoriaAdicionar from "./routes/CategoriaAdicionar/CategoriaAdicionar";
import PrivateRoute from "./components/PrivateRoute";

import Carrinho from "./pages/Carrinho"; // ou ajuste o caminho se der erro

import Pagamento from "./pages/Pagamento";

import Checkout from "./routes/Checkout/Checkout";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<PrivateRoute element={<Home />} />} />
      <Route
        path="/categoria/:nomeCategoria"
        element={<PrivateRoute element={<PagCategorie />} />}
      />
      <Route path="/" element={<PagInicial />} />
      <Route path="/login" element={<Login />} />
      <Route path="/loginAdmin" element={<LoginAdmin />} />
      <Route
        path="/homeAdmin"
        element={<PrivateRoute element={<HomeAdmin />} />}
      />
      <Route
        path="/editar/produto"
        element={<PrivateRoute element={<ModalAdminEdit />} />}
      />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/cadastroAdmin" element={<CadastroAdmin />} />
      <Route
        path="/adicionar/categoria"
        element={<PrivateRoute element={<ProdutoAdd />} />}
      />
      <Route
        path="/adicionar/produto"
        element={<PrivateRoute element={<CategoriaAdicionar />} />}
      />

      <Route
        path="/carrinho"
        element={<PrivateRoute element={<Carrinho />} />}
      />

      <Route
        path="/checkout"
        element={<PrivateRoute element={<Checkout />} />}
      />

      <Route path="/pagamento" element={<Pagamento />} />

      {/* element={<PrivateRoute element={}/> } */}
    </Routes>
  );
}

export default App;
