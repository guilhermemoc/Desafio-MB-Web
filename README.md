# Projeto de Formulário de Registro

Este é um projeto de formulário de registro construído utilizando React com Vite no frontend e Node.js com Express no backend. O objetivo principal é simular um fluxo de registro de usuário, validando os dados e simulando o envio para um servidor.

## Tecnologias Utilizadas

### Frontend

- **React**: Biblioteca para construção de interfaces de usuário.
- **Vite**: Ferramenta de build e desenvolvimento rápida para projetos com React.
- **Tailwind**: Biblioteca de stilização css
- **Axios**: Biblioteca para fazer requisições HTTP.

### Backend

- **Node.js**: Ambiente de execução JavaScript do lado do servidor.
- **Express**: Framework para Node.js que facilita a criação de APIs e servidores web.
- **cors**: Middleware para habilitar CORS (Cross-Origin Resource Sharing).

## Como Rodar o Projeto

### Pré-requisitos

- Node.js e npm instalados

### Passos para rodar o frontend

1. Navegue até o diretório do frontend:
   ```bash
   cd frontend
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Execute o build do projeto
   ```bash
   npm run build
   ```
4. (OPCIONAL) rode o projeto local
   ```bash
   npm run dev
   ```
   O servidor estará disponível em http://localhost:5173.
   
### Passos para rodar o backend

1.Navegue até o diretório do backend:
  ```bash
   cd backend
   ```
2.Instale as dependências:
  ```bash
   npm install
   ```
3.Inicie o servidor:
  ```bash
   node server.js
   ```
### Endpoints
# [GET] /registration
Responsável por renderizar a página de registro.

# [POST] /registration
API de cadastro responsável por receber os dados submetidos pelo usuário em formato JSON. Valida os campos e retorna uma mensagem de sucesso.

Estrutura do projeto:
├── backend
│ ├── server.js
│ └── ...
├── frontend
│ ├── src
│ │ ├── components
│ │ │ ├── Header.tsx
│ │ │ ├── Register
│ │ │ │ ├── FirstStep.tsx
│ │ │ │ ├── SecondStep.tsx
│ │ │ │ ├── ThirdStep.tsx
│ │ │ │ └── Review.tsx
│ │ │ └── Container.tsx
│ │ ├── App.tsx
│ │ ├── main.tsx
│ │ └── api.ts
│ └── ...
└── README.md