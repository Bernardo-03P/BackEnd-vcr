const { Pool } = require("pg");

const pool = new Pool({
    user: process.env.USER_NAME,
    host: process.env.HOST_NAME,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    dialect: process.env.DB_DIALECT, // Esta linha não é usada pelo 'pg', mas pode ser mantida
    port: process.env.PORT_NUMBER
});

// Apenas para verificar se a conexão com o banco de dados foi bem sucedida ao iniciar o servidor
pool.connect((err, client, release) => {
    if (err) {
      return console.error('Erro ao conectar ao banco de dados:', err.stack);
    }
    console.log('Pool de conexão com o banco de dados criado com sucesso!');
    // Libera o cliente de volta para o pool
    release();
});

// Exportamos um objeto com uma função "query". 
// O pool gerencia automaticamente a abertura e o fechamento das conexões para nós.
module.exports = {
  query: (text, params) => pool.query(text, params),
};