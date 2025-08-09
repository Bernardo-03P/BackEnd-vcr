require("dotenv").config(); 

const db = require("./db");
const express = require('express');

const port = process.env.PORT;
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());


app.get('/depoimentos', async (req, res) => {
    try {
        const result = await db.query("SELECT * FROM depoimentos ORDER BY id DESC");
        res.json(result.rows);
    } catch (err) {
        console.error("Erro em GET /depoimentos:", err);
        res.status(500).json({ error: "Erro ao buscar depoimentos." });
    }
});

app.get('/depoimentos/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) return res.status(400).json({ error: "ID inválido." });

        const result = await db.query("SELECT * FROM depoimentos WHERE id=$1", [id]);
        res.json(result.rows[0] || null);
    } catch (err) {
        console.error(`Erro em GET /depoimentos/${req.params.id}:`, err);
        res.status(500).json({ error: "Erro ao buscar depoimento." });
    }
});

app.post("/depoimentos", async (req, res) => {
    try {
        const { nome_usuario, mensagem } = req.body;
        const sql = "INSERT INTO depoimentos(nome_usuario, mensagem) VALUES($1, $2);";
        await db.query(sql, [nome_usuario, mensagem]);
        res.sendStatus(201);
    } catch (err) {
        console.error("Erro em POST /depoimentos:", err);
        res.status(500).json({ error: "Erro ao inserir depoimento." });
    }
});


app.patch("/depoimentos/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            return res.status(400).json({ error: "ID inválido." });
        }

        const { nome_usuario, mensagem } = req.body;
        const campos = [];
        const valores = [];
        let contadorParametro = 1;

 
        if (nome_usuario !== undefined) {
            campos.push(`nome_usuario=$${contadorParametro++}`);
            valores.push(nome_usuario);
        }
        if (mensagem !== undefined) {
            campos.push(`mensagem=$${contadorParametro++}`);
            valores.push(mensagem);
        }

 
        if (campos.length === 0) {
            return res.status(400).json({ error: "Nenhum campo para atualizar foi fornecido." });
        }
        
        valores.push(id);

        const sql = `UPDATE depoimentos SET ${campos.join(', ')} WHERE id=$${contadorParametro}`;
        
        console.log("Executando SQL:", sql);
        console.log("Com valores:", valores);

        const result = await db.query(sql, valores);

        if (result.rowCount === 0) {
            return res.status(404).json({ error: "Depoimento não encontrado para atualização." });
        }

        res.sendStatus(204);
    } catch (err) {
        console.error(`Erro em PATCH /depoimentos/${req.params.id}:`, err);
        res.status(500).json({ error: "Erro ao atualizar depoimento." });
    }
});
   
app.delete("/depoimentos/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) return res.status(400).json({ error: "ID inválido." });

        const sql = "DELETE FROM depoimentos WHERE id=$1";
        await db.query(sql, [id]);
        res.sendStatus(204);
    } catch (err) {
        console.error(`Erro em DELETE /depoimentos/${req.params.id}:`, err);
        res.status(500).json({ error: "Erro ao deletar depoimento." });
    }
});


app.listen(port, () => {
    console.log(`Backend Rodando na porta ${port}!`);
});