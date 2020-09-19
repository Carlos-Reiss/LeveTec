import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import PessoaCursoController from '../controllers/PessoaCursoController';

const pessoaCursoRouter = Router();

const pessoaCursoController = new PessoaCursoController();

pessoaCursoRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      pessoa_id: Joi.string().required(),
      curso_id: Joi.string().required(),
    }),
  }),
  pessoaCursoController.create,
);

export default pessoaCursoRouter;
