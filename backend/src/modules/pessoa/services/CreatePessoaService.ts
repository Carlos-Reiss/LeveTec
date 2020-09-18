import Pessoa from '../entities/Pessoa';
import { IPessoa } from '../interfaces/IPessoa';
import ValidateCpf from '../../../util/validaCPF';
import AppError from '../../../error/AppError';

type IRequest = {
  cpf: string,
  nome: string,
  telefone: string,
}

class CreatePessoaService {
  public async execute({
    cpf,
    nome,
    telefone,
  }: IRequest): Promise<IPessoa> {
    if (ValidateCpf(cpf) === false) {
      throw new AppError('CPF não é valido', 400);
    }

    const verificaExistenciaCPFemBase = await Pessoa.findOne({ cpf });

    if (verificaExistenciaCPFemBase) {
      throw new AppError('CPF já existente na base de dados', 400);
    }

    const pessoa = await Pessoa.create({ cpf, nome, telefone });

    return pessoa;
  }
}
export default CreatePessoaService;
