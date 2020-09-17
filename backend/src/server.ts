// author: carlos antonio reis

import express from 'express';
import router from './router';

import connectionDatabase from './connection/ConnectionMongo';

const server = express();

const URL =
  'mongodb+srv://carlos-reis:12345678carlos@cluster0.ntz2g.mongodb.net/Projeto?retryWrites=true&w=majority';

connectionDatabase(URL);

server.use(express.json());
server.use(router);

server.listen(3333, () => {
  console.log('Servidor rodando na porta: 3333');
});
