import { Router } from 'express';
import cursorRouter from '../modules/curso/routes/cursor.routes';
import pessoasRouter from '../modules/pessoa/routes/pessoas.routes';

const router = Router();

router.use('/pessoas', pessoasRouter);
router.use('/cursos', cursorRouter);

export default router;
