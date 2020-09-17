// author: carlos antonio reis

import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';

import { errors } from 'celebrate';

import cors from 'cors';

import router from './router';
import appError from './error/AppError';

import connectionDatabase from './connection/ConnectionMongo';

const server = express();

const URL =
  'mongodb+srv://carlos-reis:12345678carlos@cluster0.ntz2g.mongodb.net/Projeto?retryWrites=true&w=majority';

connectionDatabase(URL);

server.use(cors());
server.use(express.json());

server.use(router);

server.use(errors());

server.use(
  (err: Error, request: Request, response: Response, _: NextFunction) => {
    if (err instanceof appError) {
      return response
        .status(err.statusCode)
        .json({ status: 'Error', message: err.message });
    }

    console.log(err);

    return response
      .status(500)
      .json({ status: 'Internal Server Error', message: err.message });
  },
);

server.listen(3333, () => {
  console.log('Servidor rodando na porta: 3333');
});
