# 📖 README.md

## 📌 Sobre o Projeto

API RESTful de uma **plataforma EAD** feita com **Node.js + Express + MySQL**, seguindo boas práticas de organização em pacotes.

## 🚀 Funcionalidades

* Cadastro e login de usuários com senha criptografada
* Criação e listagem de cursos
* Associação entre usuários e cursos
* Validações com middleware
* Autenticação via JWT

## 🏗️ Estrutura do Projeto

* **src/config** → Configuração do banco de dados
* **src/models** → Modelos Sequelize/MySQL
* **src/controllers** → Controle de requisições
* **src/services** → Regras de negócio
* **src/routes** → Definição de rotas
* **src/middlewares** → Middlewares de validação e autenticação

## 🔧 Instalação

Veja o passo a passo em [`docs/SETUP.md`](docs/SETUP.md).

## 📡 Endpoints principais

### Usuários

* `POST /api/users` → Criar usuário
* `GET /api/users` → Listar usuários

### Cursos

* `POST /api/courses` → Criar curso
* `GET /api/courses` → Listar cursos

## 🛠️ Tecnologias Utilizadas

* Node.js
* Express.js
* MySQL
* Sequelize ORM
* JWT para autenticação
* Bcrypt para criptografia de senhas

## 📜 Licença

MIT License