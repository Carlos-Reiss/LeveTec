import Pessoa from '../entities/Pessoa';
import { IPessoa } from '../interfaces/IPessoa';
import ValidateCpf from '../util/validaCPF';

class CreatePessoaService {
  public async execute({ cpf, nome, telefone }: Omit<IPessoa, 'id'>) {
    if (ValidateCpf(cpf)) {
      throw new Error('CPF não é valido');
    }
    const verificaExistenciaCPFemBase = await Pessoa.findOne({ cpf });

    if (verificaExistenciaCPFemBase) {
      throw new Error('CPF já existente na base de dados');
    }
    return verificaExistenciaCPFemBase;
  }
}
export default CreatePessoaService;
