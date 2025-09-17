# 📚 Plataforma EAD - API Node.js + MySQL

Este projeto é uma API RESTful para uma plataforma de Educação a Distância (EAD), desenvolvida em **Node.js** com **Express.js**, utilizando **MySQL** como banco de dados e seguindo boas práticas de arquitetura.

---

## 📂 Estrutura de Pastas

```bash
├── src
│   ├── config          # Configurações da aplicação (DB, JWT, etc)
│   │   └── database.js
│   ├── controllers     # Controladores que recebem requisições HTTP
│   │   ├── UserController.js
│   │   └── CourseController.js
│   ├── models          # Modelos das entidades (Users, Courses)
│   │   ├── User.js
│   │   └── Course.js
│   ├── routes          # Definição das rotas da API
│   │   ├── userRoutes.js
│   │   └── courseRoutes.js
│   ├── services        # Regras de negócio (lógica da aplicação)
│   │   ├── UserService.js
│   │   └── CourseService.js
│   ├── middlewares     # Middlewares (validações, autenticação, erros)
│   │   ├── authMiddleware.js
│   │   └── validate.js
│   ├── utils           # Funções auxiliares (ex: hash de senha, JWT)
│   │   └── password.js
│   ├── app.js          # Configuração principal do Express
│   └── server.js       # Inicialização do servidor
│
├── docs                # Documentação do projeto
│   └── SETUP.md        # Guia de instalação passo a passo
│
├── .env                # Variáveis de ambiente (config local)
├── package.json
└── README.md
```

---

## 🚀 Instalação e Execução

1. **Clonar o projeto:**

   ```bash
   git clone https://github.com/seu-repo/ead-api.git
   cd ead-api
   ```

2. **Instalar dependências:**

   ```bash
   npm install
   ```

3. **Configurar variáveis de ambiente:**
   Criar arquivo `.env` na raiz do projeto:

   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=123456
   DB_NAME=ead_platform
   DB_PORT=3306

   JWT_SECRET=seuSegredoAqui
   JWT_EXPIRES_IN=1d
   PORT=3000
   ```

4. **Rodar o servidor:**

   ```bash
   npm run dev
   ```

---

## 📌 Endpoints Principais

### Usuários

* `POST /api/users/register` → Criar novo usuário
* `POST /api/users/login` → Autenticar usuário (gera token JWT)
* `GET /api/users/:id` → Buscar usuário por ID (rota protegida)

### Cursos

* `POST /api/courses` → Criar curso (somente usuários autenticados)
* `GET /api/courses` → Listar cursos
* `GET /api/courses/:id` → Buscar curso por ID

---

## 🔐 Autenticação

* Utiliza **JWT (JSON Web Token)** para autenticação.
* Usuários devem enviar o token no header:

  ```http
  Authorization: Bearer <token>
  ```

---

## 📖 Arquivo de Passo a Passo (docs/SETUP.md)

````markdown
# 🛠️ Guia de Instalação da API EAD

## 1. Pré-requisitos
- Node.js 18+
- MySQL 8+
- Git

## 2. Configuração do Banco de Dados
```sql
CREATE DATABASE ead_platform;
````

## 3. Instalação

```bash
git clone https://github.com/seu-repo/ead-api.git
cd ead-api
npm install
```

## 4. Configuração

* Criar arquivo `.env` com credenciais do banco e chave JWT.

## 5. Rodando o Projeto

```bash
npm run dev
```

## 6. Testando Rotas

* Registrar usuário:

```bash
curl -X POST http://localhost:3000/api/users/register \
   -H "Content-Type: application/json" \
   -d '{"name":"João","email":"joao@mail.com","password":"123456"}'
```

* Login:

```bash
curl -X POST http://localhost:3000/api/users/login \
   -H "Content-Type: application/json" \
   -d '{"email":"joao@mail.com","password":"123456"}'
```


## 📦 Dependências principais (produção)
npm install express mysql2 sequelize dotenv bcrypt jsonwebtoken express-validator cors


- express → framework web para criar rotas e middlewares

- mysql2 → driver para conectar ao MySQL

- sequelize → ORM (facilita consultas e manipulação de dados)

- dotenv → gerenciar variáveis de ambiente

- bcrypt → hash de senhas de usuários

- jsonwebtoken → autenticação JWT

- express-validator → validação de dados de entrada

- cors → habilitar acesso da API a partir de outras origens (ex: frontend React, Angular)

---

## 🔌 Extensões úteis (opcional)

Se quiser turbinar ainda mais:

- npm install morgan helmet

- morgan → logs de requisições HTTP (útil para debug)

- helmet → segurança extra nos headers HTTP

---

## ✅ Boas Práticas Utilizadas
- Arquitetura MVC + Services
- Separação de responsabilidades
- Validação de dados (Joi ou express-validator)
- JWT para autenticação
- Scripts npm (`dev`, `start`)
- Documentação organizada

---

💡 Esse projeto serve como base para construir uma plataforma EAD real, permitindo evoluir com novos recursos (módulos, aulas, matrículas, pagamentos, etc).

```
