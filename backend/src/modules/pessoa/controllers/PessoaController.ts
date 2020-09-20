import { Request, Response } from 'express';
import LimparCpf from '../../../util/limparCPF';
import LimparTelefone from '../../../util/limparTelefone';

import CreatePessoaService from '../services/CreatePessoaService';
import SearchPessoaService from '../services/SearchPessoaService';
import DeletePessoaService from '../services/DeletePessoaService';
import UpdatePessoaService from '../services/UpdatePessoaService';

export default class PessoaController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { nome, telefone, cpf } = request.body;

    const cpfLimpo = LimparCpf(cpf);

    const telefoneLimpo = LimparTelefone(telefone);

    const createPessoa = new CreatePessoaService();

    const pessoa = await createPessoa.execute({
      cpf: cpfLimpo,
      nome,
      telefone: telefoneLimpo,
    });

    return response.json(pessoa);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const searchPessoa = new SearchPessoaService();

    const pessoa = await searchPessoa.execute();

    return response.json(pessoa);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { cpf } = request.params;

    const deletePessoa = new DeletePessoaService();

    await deletePessoa.execute({ cpf });

    return response.status(204).json();
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { cpf } = request.params;
    const { nome, telefone } = request.body;

    const updatePessoa = new UpdatePessoaService();

    const pessoa = await updatePessoa.execute({
      cpf,
      nome,
      telefone,
    });

    return response.json(pessoa);
  }
}
