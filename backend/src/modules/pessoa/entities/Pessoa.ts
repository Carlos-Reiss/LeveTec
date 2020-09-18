import { model, Schema } from 'mongoose';
import { IPessoa } from '../interfaces/IPessoa';

const PessoaSchema = new Schema<IPessoa>({
  id: { type: String },
  nome: { type: String, required: true },
  telefone: { type: String, required: true },
  cpf: { type: String, required: true, unique: true },
});

export default model<IPessoa>('Pessoa', PessoaSchema);
