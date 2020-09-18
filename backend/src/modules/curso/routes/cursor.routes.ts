import { Router, Request, Response } from 'express';
import Curso from '../entities/Curso';

const cursorRouter = Router();

cursorRouter.post('/', async (request: Request, response: Response) => {
  const { nome } = request.body;

  const curso = await Curso.create({ nome });

  return response.json(curso);
});

export default cursorRouter;
