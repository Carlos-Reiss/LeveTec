import { model, Schema } from 'mongoose';
import { ICurso } from '../interfaces/ICurso';

const CursoSchema = new Schema<ICurso>({
  nome: { type: String, required: true },
});

export default model<ICurso>('Curso', CursoSchema);
