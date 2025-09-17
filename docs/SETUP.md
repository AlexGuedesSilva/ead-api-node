# 📂 Estrutura de Pacotes

```
EAD-API/
│-- src/
│   │-- config/
│   │   └── database.js        # Conexão MySQL
│   │-- controllers/
│   │   ├── UserController.js  # CRUD Usuários
│   │   └── CourseController.js# CRUD Cursos
│   │-- models/
│   │   ├── User.js            # Modelo de Usuário
│   │   └── Course.js          # Modelo de Curso
│   │-- routes/
│   │   ├── userRoutes.js      # Rotas Usuários
│   │   └── courseRoutes.js    # Rotas Cursos
│   │-- services/
│   │   ├── UserService.js     # Regras de negócio Usuários
│   │   └── CourseService.js   # Regras de negócio Cursos
│   │-- middlewares/
│   │   └── validate.js        # Middleware de validação
│   │-- utils/
│   │   └── response.js        # Padrão de respostas JSON
│   └── app.js                 # Configuração principal
│
│-- docs/
│   └── SETUP.md               # Guia passo a passo
│
│-- .env                       # Variáveis de ambiente
│-- package.json
│-- README.md
```

---

# 📘 docs/SETUP.md (Passo a Passo)

### 1. Pré-requisitos

* Node.js (>=18)
* MySQL (>=8)
* NPM ou Yarn

### 2. Clonar o projeto

```bash
git clone https://github.com/seuusuario/EAD-API.git
cd EAD-API
```

### 3. Instalar dependências

```bash
npm install
```

### 4. Configurar ambiente

Crie um arquivo `.env`:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=senha
DB_NAME=ead_db
PORT=3000
JWT_SECRET=secreta123
```

### 5. Configurar banco de dados

```sql
CREATE DATABASE ead_db;
```

### 6. Rodar o servidor

```bash
npm start
```

### 7. Testar API

```bash
curl http://localhost:3000/api/users
```

---


