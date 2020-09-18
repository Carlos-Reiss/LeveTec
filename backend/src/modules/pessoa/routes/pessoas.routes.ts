import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import PessoaController from '../controllers/PessoaController';

const pessoasRouter = Router();

const pessoaController = new PessoaController();

pessoasRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      nome: Joi.string().required(),
      telefone: Joi.string().required().max(11).min(9),
      cpf: Joi.string().required(),
    }),
  }),
  pessoaController.create,
);

pessoasRouter.get(
  '/:cpf',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      cpf: Joi.string().required(),
     }),
  }),
  pessoaController.index
);

pessoasRouter.delete(
  '/:cpf',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      cpf: Joi.string().required(),
     }),
  }),
  pessoaController.delete
);

export default pessoasRouter;
