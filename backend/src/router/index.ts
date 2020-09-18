import { Router } from 'express';
import cursorRouter from '../modules/curso/routes/cursos.routes';
import pessoasRouter from '../modules/pessoa/routes/pessoas.routes';

const router = Router();

router.use('/pessoas', pessoasRouter);
router.use('/cursos', cursorRouter);

export default router;
