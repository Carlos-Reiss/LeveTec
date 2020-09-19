import Curso from '../entities/Curso';
import { ICurso } from '../interfaces/ICurso';

class SearchPessoaService {
  public async execute(): Promise<ICurso[]> {
    const cursos = await Curso.find();

    return cursos;
  }
}

export default SearchPessoaService;
