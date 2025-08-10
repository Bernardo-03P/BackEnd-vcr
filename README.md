# VCR Digital - Backend API

## 📝 Descrição do Projeto

Este é o backend do projeto VCR Digital, desenvolvido em Node.js com o framework Express. A aplicação fornece uma API RESTful para gerenciar depoimentos de clientes, utilizando PostgreSQL como banco de dados.

O objetivo é servir como a fonte de dados para a aplicação React, permitindo a criação, leitura, atualização e exclusão (CRUD) de registros de depoimentos de forma segura e eficiente.

## 🚀 Tecnologias Utilizadas

-   **Node.js**: Ambiente de execução JavaScript.
-   **Express.js**: Framework para construção de APIs.
-   **PostgreSQL**: Banco de dados relacional.
-   **`node-postgres` (pg)**: Driver Node.js para o PostgreSQL.
-   **`dotenv`**: Para gerenciamento de variáveis de ambiente.
-   **`cors`**: Para permitir requisições de origens diferentes (frontend).
-   **`nodemon`**: Para reiniciar o servidor automaticamente durante o desenvolvimento.

## 🔧 Instalação e Configuração

### Pré-requisitos

-   **Node.js** (versão 14 ou superior)
-   **PostgreSQL** instalado e rodando.

### Passos para Instalação

1.  **Clone o repositório:**
    ```bash
    git clone <URL_DO_SEU_REPOSITORIO_BACKEND>
    cd <pasta_do_backend>
    ```

2.  **Instale as dependências** do projeto:
    ```bash
    npm install
    ```

3.  **Configure as Variáveis de Ambiente:**
    Crie um arquivo chamado `.env` na raiz do projeto e adicione as suas credenciais do banco de dados e a porta do servidor, seguindo o exemplo abaixo:

    ```dotenv
    # Arquivo .env

    # Porta onde o servidor vai rodar
    PORT=3001

    # Credenciais do seu banco de dados PostgreSQL
    USER_NAME=seu_usuario_postgres
    HOST_NAME=localhost
    DB_NAME=sua_database
    DB_PASSWORD=sua_senha
    PORT_NUMBER=5432
    ```

4.  **Estrutura do Banco de Dados:**
    Certifique-se de que seu banco de dados (`DB_NAME`) possui uma tabela chamada `depoimentos`. Você pode usar o seguinte comando SQL para criá-la:

    ```sql
    CREATE TABLE depoimentos (
        id SERIAL PRIMARY KEY,
        nome_usuario VARCHAR(100) NOT NULL,
        mensagem TEXT NOT NULL,
        data_criacao TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
    ```

## ▶️ Executando o Projeto

Para iniciar o servidor em **modo de desenvolvimento** (com reinicialização automática a cada alteração), execute:

```bash
npm run dev
```
## 🗺️ Rotas da API

| Método | Endpoint          | Descrição                                 |
| :----- | :---------------- | :---------------------------------------- |
| `GET`  | `/depoimentos`    | Lista todos os depoimentos.               |
| `GET`  | `/depoimentos/:id` | Retorna um depoimento específico.         |
| `POST` | `/depoimentos`    | Cria um novo depoimento.                  |
| `PATCH`| `/depoimentos/:id` | Atualiza as informações de um depoimento. |
| `DELETE`| `/depoimentos/:id`| Deleta um depoimento.                     |


Este projeto foi construído com a dedicação e o talento da seguinte equipe:

#### Bernardo Pozzebon Poluceno - *Desenvolvedor Backend*
Bernardo foi o arquiteto da API, cuidando de toda a lógica do servidor. Suas principais contribuições foram:
- Estruturação do backend com Node.js e Express.
- Desenvolvimento das rotas da API (GET, POST, PATCH, DELETE).
- Implementação da conexão com o banco de dados PostgreSQL.
- **[GitHub](https://github.com/Bernardo-03P)** 

#### Jordan Soares Aguiar - *Desenvolvedor Frontend & Banco de Dados*
Jordan foi o responsável por dar vida ao painel de gerenciamento, conectando o visual à funcionalidade. Suas principais contribuições foram:
- Desenvolvimento da interface de administração em React.
- Criação e estruturação da tabela `depoimentos` no PostgreSQL.
- **[GitHub](https://github.com/Jordan0725)** 

#### Lucas Casemiro de Freitas Frarre - *Designer e Pesquisador*
Lucas definiu a identidade visual do projeto e ajudou a traçar o caminho inicial. Suas principais contribuições foram:
- Criação do design e dos layouts para as interfaces do sistema.
- Pesquisa de referências e auxílio no planejamento geral do projeto.
- **[GitHub](https://github.com/lucascasemiro)** 
