import Pessoa from '../entities/Pessoa';
import { IPessoa } from '../interfaces/IPessoa';
import AppError from '../../../error/AppError';

type IRequest = {
  cpf: string;
  nome: string;
  telefone: string;
};

class UpdatePessoaService {
  public async execute({ cpf, nome, telefone }: IRequest): Promise<IPessoa> {
    const searchPessoa = await Pessoa.findOne({ cpf });

    if (!searchPessoa) {
      throw new AppError(
        'Buscamos na base de dados mas não encontramos nada...',
        404,
      );
    }

    const pessoa = await Pessoa.findOneAndUpdate(
      searchPessoa.id,
      {
        nome,
        telefone,
      },
      { new: true },
    );

    if (!pessoa) {
      throw new AppError(
        'Buscamos na base de dados mas não encontramos nada...',
        404,
      );
    }

    return pessoa;
  }
}

export default UpdatePessoaService;
