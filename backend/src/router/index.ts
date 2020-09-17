import { Router } from 'express';
import pessoasRouter from './pessoas.routes';

const router = Router();

router.use('/pessoas', pessoasRouter);

export default router;
