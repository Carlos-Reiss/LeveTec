import PessoaCursos from '../entities/PessoaCursos';

import { IPessoaCurso } from '../interfaces/IPessoaCurso';
import AppError from '../../../error/AppError';
import Pessoa from '../../pessoa/entities/Pessoa';
import Curso from '../../curso/entities/Curso';

type IRequest = {
  pessoa_id: string;
  curso_id: string;
};

class CreatePessoaService {
  public async execute({
    curso_id,
    pessoa_id,
  }: IRequest): Promise<IPessoaCurso | null> {
    const searchPessoa = await Pessoa.findOne({ _id: pessoa_id });

    if (!searchPessoa) {
      throw new AppError(
        'Procurando essa pessoa no banco de dados e não achei...',
      );
    }
    const searchCurso = await Curso.findOne({ _id: curso_id });

    if (!searchCurso) {
      throw new AppError(
        'Procurando esse curso no banco de dados e não achei...',
      );
    }

    const findPessoaCurso = await PessoaCursos.findOne({ curso: curso_id });

    if (!findPessoaCurso) {
      const pessoaCurso = await PessoaCursos.create({
        curso: curso_id,
        pessoas: [pessoa_id],
      });
      return pessoaCurso;
    }

    const pessoasNoCurso = findPessoaCurso.pessoas;

    const pessoaJaNoCurso = pessoasNoCurso.find(pessoa => {
      if (pessoa.toString() === pessoa_id.toString()) {
        return pessoa;
      }
      return null;
    });

    if (pessoaJaNoCurso) {
      throw new AppError('Essa pessoa já está cadastrada no curso...');
    }
    const pessoasCurso = await PessoaCursos.findOneAndUpdate(
      findPessoaCurso.id,
      { $push: { pessoas: pessoa_id } },
      { new: true },
    );

    return pessoasCurso;
  }
}
export default CreatePessoaService;
