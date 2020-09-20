import Pessoa from '../entities/Pessoa';
import { IPessoa } from '../interfaces/IPessoa';
import AppError from '../../../error/AppError';

class SearchPessoaService {
  public async execute(): Promise<IPessoa[]> {
    const searchPessoa = await Pessoa.find();

    if (!searchPessoa) {
      throw new AppError(
        'Buscamos na base de dados mas não encontramos nada...',
        404,
      );
    }

    return searchPessoa;
  }
}

export default SearchPessoaService;
