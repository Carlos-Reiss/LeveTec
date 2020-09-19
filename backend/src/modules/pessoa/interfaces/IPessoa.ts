import { Document } from 'mongoose';

export interface IPessoa extends Document {
  nome: string;
  telefone: string;
  cpf: string;
}
