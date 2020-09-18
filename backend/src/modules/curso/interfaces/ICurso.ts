import { Document } from 'mongoose';

export interface ICurso extends Document {
  nome: string;
}
