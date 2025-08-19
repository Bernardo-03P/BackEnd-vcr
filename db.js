const { Pool } = require("pg");

const pool = new Pool({
    user: process.env.USER_NAME,
    host: process.env.HOST_NAME,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    dialect: process.env.DB_DIALECT, 
    port: process.env.PORT_NUMBER
});


pool.connect((err, client, release) => {
    if (err) {
      return console.error('Erro ao conectar ao banco de dados:', err.stack);
    }
    console.log('Pool de conexão com o banco de dados criado com sucesso!');
    
    release();
});

module.exports = {
  query: (text, params) => pool.query(text, params),

};
