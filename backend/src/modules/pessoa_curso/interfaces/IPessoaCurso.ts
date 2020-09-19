import { Document } from 'mongoose';

export interface IPessoaCurso extends Document {
  pessoas: string[];
  curso: string;
}
