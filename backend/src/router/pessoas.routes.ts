import { Router, Request, Response } from 'express';
import CreatePessoaService from '../service/CreatePessoaService';

const pessoasRouter = Router();

pessoasRouter.post('/', async (request: Request, response: Response) => {
  const { nome, telefone, cpf } = request.body;

  const createPessoa = new CreatePessoaService();

  const pessoa = await createPessoa.execute({ nome, cpf, telefone });

  return response.json(pessoa);
});

export default pessoasRouter;
