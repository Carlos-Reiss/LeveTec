import { Router } from 'express';
import pessoasRouter from '../modules/pessoa/routes/pessoas.routes';

const router = Router();

router.use('/pessoas', pessoasRouter);

export default router;
