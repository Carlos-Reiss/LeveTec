import { model, Schema } from 'mongoose';


const CursoSchema = new Schema({
  numeroMatricula: {type: Schema.Types.ObjectId, ref: 'Pessoa'},
  nome: { type: String, required: true },
});

export default model('Curso', CursoSchema);
