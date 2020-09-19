import { model, Schema } from 'mongoose';
import { IPessoaCurso } from '../interfaces/IPessoaCurso';

const PessoaCursoSchema = new Schema<IPessoaCurso>({
  id: { type: String },
  pessoas: [{ type: Schema.Types.ObjectId, ref: 'Pessoa' }],
  curso: { type: Schema.Types.ObjectId, ref: 'Curso' },
});

export default model<IPessoaCurso>('PessoaCurso', PessoaCursoSchema);
