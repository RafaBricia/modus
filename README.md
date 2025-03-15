# Modus
Projeto universitário - Loja de roupas virtual - Modus
</br>

Modus é um projeto universitário que consiste no desenvolvimento de uma loja virtual de roupas. O sistema foi criado utilizando tecnologias modernas para oferecer uma experiência eficiente e escalável aos usuários.

</br>

## Objetivo do Projeto

O Modus tem como propósito permitir a navegação e compra de roupas de forma intuitiva e rápida. Ele inclui funcionalidades como:

- Cadastro e gerenciamento de produtos
- Interface interativa para os administradores
- Conexão com banco de dados para armazenamento de informações

## Estrutura do Repositório

📂 <a href="https://github.com/RafaBricia/modus/tree/desenvolvimento/frontend/projetomodus">/frontend →</a> Interface do usuário construída com React </br>
📂 <a href="https://github.com/RafaBricia/modus/tree/desenvolvimento/backend">/backend →</a> API e lógica de negócios usando Node.js </br>
📂 <a href="https://github.com/RafaBricia/modus/tree/desenvolvimento/backend/db">/database → </a> Configuração do MongoDB para armazenamento de dados </br>
📂 <a href="https://github.com/RafaBricia/modus/tree/desenvolvimento/tests">/tests →</a> 


## Tecnologias, linguagens e ferramentas usadas:

<p align="center">
  <!-- VS Code -->
  <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg" alt="VS Code" width="40" height="40"/>
  </a>
  
  <!-- Node.js -->
  <a href="https://nodejs.org" target="_blank" rel="noreferrer">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="Node.js" width="40" height="40"/>
  </a>
  
  <!-- JavaScript -->
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" width="40" height="40"/>
  </a>

  <!-- React -->
  <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="React" width="40" height="40"/>
  </a>

  <!-- MongoDB -->
  <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="MongoDB" width="40" height="40"/>
  </a>

  <!-- Figma -->
  <a href="https://www.figma.com/design/h9sw9gfp0emLTb0eYcmw5q/projeto-Modus?node-id=1-3&t=QIl3OY8Imi4ZyR9H-0" target="_blank" rel="noreferrer">
    <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" alt="Figma" width="40" height="40"/>
  </a>

</p>

</br>


## Como clonar o repositório:

1) Certifique-se que você tem o git instalado e um ambiente para clonar o repositório:

- Link do dowload para git: <a href="https://git-scm.com/downloads">Downloads</a>
</br>

2) Certifique-se que você configurou o git corretamente:

 ``` 
git config --global user.name "Fulano de Tal"
git config --global user.email fulanodetal@exemplo.br

 ``` 
- Link da documentação para configurar <a href="https://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Configura%C3%A7%C3%A3o-Inicial-do-Git">git</a>

3) Use esses comandos para clonar via terminal:

 ``` 

git clone https://github.com/endereçoDoSeuRepositório.git

 ``` 
</br>


## 🎨 Designer - Figma  
🔗 [Clique aqui](https://www.figma.com/design/h9sw9gfp0emLTb0eYcmw5q/projeto-Modus?node-id=1-3&t=QIl3OY8Imi4ZyR9H-0) para visualizar o design do projeto no **Figma**.  

</br>

## 📌 Gerenciamento de Tarefas  
🛠️ Acompanhe o progresso do projeto no **GitHub Projects**: [Clique aqui](https://github.com/users/RafaBricia/projects/3).  

</br>


# Regras de Autenticação e Autorização

## 📌 Visão Geral
Este documento define como são as regras de autenticação e autorização para cada entidade no sistema da loja. Mas, para facilitar os testes locais, deixamos Administrador e Cliente sem autenticação.

## 🔒 Regras de Acesso

| Entidade       | Quem Pode Acessar?          | Ações Permitidas |
|---------------|----------------------|------------------|
| **Cliente** | Cliente autenticado | Criar conta, editar perfil, visualizar suas informações |
| **Administrador** | Administrador autenticado | Gerenciar clientes, produtos, pedidos e pagamentos |
| **Produto** | Administrador autenticado | Criar, editar e excluir produtos |
| **Categoria** | Administrador autenticado | Criar, editar e excluir categorias |
| **Pagamento** | Cliente autenticado | Criar e visualizar seus pagamentos |
| **Carrinho** | Cliente autenticado | Adicionar produtos e visualizar seu carrinho |
| **Pedido** | Cliente autenticado | Criar pedidos e visualizar os próprios pedidos |


## Direcionamento de pastas

├── backend<br>
│   ├── controller<br>
│   │   ├── adminController.js<br>
│   │   ├── carrinhoController.js<br>
│   │   ├── categoriaController.js<br>
│   │   ├── clienteController.js<br>
│   │   ├── loginController.js<br>
│   │   ├── middleware<br>
│   │   │   └── middlewareAuth.js<br>
│   │   ├── pagamentoController.js<br>
│   │   ├── pedidosController.js<br>
│   │   └── produtoController.js<br>
│   ├── db<br>
│   │   └── database.js<br>
│   ├── index.js<br>
│   ├── model<br>
│   │   ├── adminModel.js<br>
│   │   ├── carrinhoModel.js<br>
│   │   ├── categoriaModel.js<br>
│   │   ├── clienteModel.js<br>
│   │   ├── pagamentoModel.js<br>
│   │   ├── pedidosModel.js<br>
│   │   └── produtoModel.js<br>
│   ├── package.json<br>
│   ├── package-lock.json<br>
│   └── route<br>
│       ├── adminRoute.js<br>
│       ├── carrinhoRoute.js<br>
│       ├── categoriaRoute.js<br>
│       ├── clienteRoute.js<br>
│       ├── loginRoute.js<br>
│       ├── pagamentoRoute.js<br>
│       ├── pedidosRoute.js<br>
│       └── produtoRoute.js<br>
├── frontend<br>
│   └── projetomodus<br>
│       ├── eslint.config.js<br>
│       ├── index.html<br>
│       ├── package.json<br>
│       ├── package-lock.json<br>
│       ├── public<br>
│       │   ├── logoEncurtada.png<br>
│       │   └── logo.png<br>
│       ├── src<br>
│       │   ├── App.css<br>
│       │   ├── App.jsx<br>
│       │   ├── assets<br>
│       │   ├── components<br>
│       │   │   ├── Card<br>
│       │   │   │   ├── Card.jsx<br>
│       │   │   │   └── Card.module.css<br>
│       │   │   ├── Logo<br>
│       │   │   │   ├── Logo.jsx<br>
│       │   │   │   └── Logo.module.css<br>
│       │   │   ├── ModalAdmin<br>
│       │   │   │   ├── ModalAdmin.jsx<br>
│       │   │   │   └── ModalAdmin.module.css<br>
│       │   │   ├── ModalCard<br>
│       │   │   │   ├── ModalCard.jsx<br>
│       │   │   │   └── ModalCard.module.css<br>
│       │   │   ├── NavBar<br>
│       │   │   │   ├── NavBar.jsx<br>
│       │   │   │   └── NavBar.module.css<br>
│       │   │   ├── PagEditarProduto<br>
│       │   │   │   ├── PagEditarProduto.jsx<br>
│       │   │   │   └── PagEditarProduto.module.css<br>
│       │   │   └── Produto<br>
│       │   │       └── ListarProduto.jsx<br>
│       │   ├── index.css<br>
│       │   ├── main.jsx<br>
│       │   └── routes<br>
│       │       ├── Home<br>
│       │       │   ├── Home.jsx<br>
│       │       │   └── Home.module.css<br>
│       │       └── PagCategorie<br>
│       │           ├── PagCategorie.jsx<br>
│       │           └── PagCategorie.module.css<br>
│       └── vite.config.js<br>
├── package.json<br>
├── package-lock.json<br>
├── README.md<br>
└── tests<br>
    ├── Admin<br>
    │   ├── DELETE<br>
    │   │   └── deleteAdmin.js<br>
    │   ├── GET<br>
    │   │   ├── getAdminAll.js<br>
    │   │   └── getAdminID.js<br>
    │   ├── POST<br>
    │   │   └── postAdmin.js<br>
    │   └── PUT<br>
    │       └── putAdmin.js<br>
    ├── app.js<br>
    ├── Carrinho<br>
    │   ├── DELETE<br>
    │   │   └── deleteCarrinho.js<br>
    │   ├── GET<br>
    │   │   ├── carrinhoAll.js<br>
    │   │   └── carrinhoID.js<br>
    │   ├── POST<br>
    │   │   └── postCarrinho.js<br>
    │   └── PUT<br>
    │       └── putCarrinho.js<br>
    ├── Categoria<br>
    │   ├── DELETE<br>
    │   │   └── deleteCategoria.js<br>
    │   ├── GET<br>
    │   │   ├── getCategoriaAll.js<br>
    │   │   └── getCategoriaID.js<br>
    │   ├── POST<br>
    │   │   └── postCategoria.js<br>
    │   └── PUT<br>
    │       └── putCategoria.js<br>
    ├── Pagamento<br>
    │   ├── DELETE<br>
    │   │   └── deletePagamento.js<br>
    │   ├── GET<br>
    │   │   ├── getPagamentoAll.js<br>
    │   │   └── getPagamentoID.js<br>
    │   ├── POST<br>
    │   │   └── postPagamento.js<br>
    │   └── PUT<br>
    │       └── putPagamento.js<br>
    └── Produto<br>
        ├── DELETE<br>
        │   └── deleteProduto.js<br>
        ├── GET<br>
        │   ├── getProdutoAll.js<br>
        │   └── getProdutoID.js<br>
        ├── POST<br>
        │   └── postProduto.js<br>
        └── PUT<br>
            └── putProduto.js<br>
