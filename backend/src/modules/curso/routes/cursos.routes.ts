import { Router } from 'express';
import CursoController from '../controllers/CursoController';

const cursorRouter = Router();

const cursoController = new CursoController();

cursorRouter.get('/', cursoController.index );

export default cursorRouter;
