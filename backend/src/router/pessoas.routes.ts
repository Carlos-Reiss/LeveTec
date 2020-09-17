import { Router, Request, Response } from 'express';
import CreatePessoaService from '../service/CreatePessoaService';
import { celebrate, Segments, Joi } from 'celebrate';

const pessoasRouter = Router();

pessoasRouter.post('/', celebrate({
  [Segments.BODY]: Joi.object().keys({
    nome: Joi.string().required(),
    telefone: Joi.string().required().max(11).min(9),
    cpf: Joi.string().required(),
  })
}), async (request: Request, response: Response) => {
  const { nome, telefone, cpf } = request.body;

  const createPessoa = new CreatePessoaService();

  const pessoa = await createPessoa.execute({ nome, cpf, telefone });

  return response.json(pessoa);
});

export default pessoasRouter;
