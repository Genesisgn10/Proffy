
import express from 'express';
import routes from './routes';
import cors from 'cors';



const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// GET: Buscar ou lustar uma informação
// POST: Criar alguma nova informação 
// PUT: Atualizar uma informação
// DELETE: Deletar uma informação existente

// Corpo (Request Body): Dados para a criação ou atualização de um registro
// Route Params: Identificar qual recurso eu quero atualuzar ou deletar
// Query Paramy: Paginação, filtros, ordenação

app.listen(3333);