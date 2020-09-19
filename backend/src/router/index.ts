import { Router } from 'express';
import cursorRouter from '../modules/curso/routes/cursos.routes';
import pessoasRouter from '../modules/pessoa/routes/pessoas.routes';
import pessoaCurso from '../modules/pessoa_curso/routes/pessoa_curso.routes';

const router = Router();

router.use('/pessoas', pessoasRouter);
router.use('/cursos', cursorRouter);
router.use('/pessoa_cursos', pessoaCurso);

export default router;
