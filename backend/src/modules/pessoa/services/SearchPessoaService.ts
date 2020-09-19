import Pessoa from '../entities/Pessoa';
import { IPessoa } from '../interfaces/IPessoa';
import ValidateCpf from '../../../util/validaCPF';
import AppError from '../../../error/AppError';

type IRequest = {
  cpf: string;
};

class SearchPessoaService {
  public async execute({ cpf }: IRequest): Promise<IPessoa> {
    if (ValidateCpf(cpf) === false) {
      throw new AppError('CPF não é valido', 400);
    }

    const searchPessoa = await Pessoa.findOne({ cpf });

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
