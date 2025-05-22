
# 📦 Modelagem de Dados - Exemplo Prático

## 🧱 Esquema de Dados 

### 🧍 Tabela: `Usuarios`

| Campo        | Tipo    | Descrição                          |
|--------------|---------|------------------------------------|
| id           | inteiro | Identificador único                |
| nome_completo| texto   | Nome completo do usuário           |
| tipo         | texto   | `comum` ou `profissional`          |
| telefone     | texto   | Telefone com DDD                   |
| email        | texto   | E-mail do usuário                  |
| senha        | texto   | Senha (hash)                       |
| cpf          | texto   | CPF do usuário                     |
| cidade       | texto   | Cidade onde mora                   |
| estado       | texto   | Estado (sigla)                     |
| bairro       | texto   | Bairro                             |
| endereco     | texto   | Rua, número etc.                   |
| complemento  | texto   | Complemento do endereço            |

---

### 📄 Tabela: `Solicitações`

| Campo                   | Tipo     | Descrição                                           |
|-------------------------|----------|-----------------------------------------------------|
| id                      | inteiro  | Identificador único                                 |
| data_solicitacao        | datetime | Data/hora da solicitação                            |
| id_usuario              | inteiro  | ID do usuário solicitante                           |
| id_usuario_profissional | inteiro  | ID do profissional que receberá a solicitação       |
| status                  | texto    | `pendente`, `aceito` ou `recusado`                  |

---

## 🧪 Exemplo de Dados

```js
// Usuários
const usuarios = [
  {
    id: 1,
    nome_completo: "João da Silva",
    tipo: "comum",
    telefone: "(27) 99999-1234",
    email: "joao@gmail.com",
    senha: "hash_senha_joao",
    cpf: "123.456.789-00",
    cidade: "Ibatiba",
    estado: "ES",
    bairro: "Centro",
    endereco: "Rua das Flores, 123",
    complemento: "Apto 101"
  },
  {
    id: 2,
    nome_completo: "Maria Oliveira",
    tipo: "profissional",
    telefone: "(27) 98888-5678",
    email: "maria@gmail.com",
    senha: "hash_senha_maria",
    cpf: "987.654.321-00",
    cidade: "Ibatiba",
    estado: "ES",
    bairro: "São José",
    endereco: "Av. Brasil, 456",
    complemento: "Sala 12"
  }
]

// Solicitações
const solicitacoes = [
  {
    id: 1,
    data_solicitacao: "2025-05-21T14:30:00",
    id_usuario: 1,
    id_usuario_profissional: 2,
    status: "pendente"
  }
]
```

---

## 📌 Explicação

- João (usuário comum) fez uma solicitação para Maria (profissional).
- O campo `id_usuario` representa **quem fez o pedido**.
- O campo `id_usuario_profissional` indica **quem vai atender**.
- O status da solicitação é `pendente`.

