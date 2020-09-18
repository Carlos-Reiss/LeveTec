import { Request, Response } from 'express';
import CreatePessoaService from '../services/CreatePessoaService';
import SearchPessoaService from '../services/SearchPessoaService';
import DeletePessoaService from '../services/DeletePessoaService';



export default class PessoaController{

  public async create(request: Request, response: Response): Promise<Response>{
    const { nome, telefone, cpf } = request.body;

    const createPessoa = new CreatePessoaService();

    const pessoa = await createPessoa.execute({
      cpf,
      nome,
      telefone,
    });


    return response.json(pessoa);
  }

  public async index(request: Request, response: Response): Promise<Response>{
    const { cpf } = request.params;

    const searchPessoa = new SearchPessoaService();

    const pessoa = await searchPessoa.execute({ cpf });

    return response.json(pessoa);

  }

  public async delete(request: Request, response: Response): Promise<Response>{
    const { cpf } = request.params;

    const deletePessoa = new DeletePessoaService();

    await deletePessoa.execute({ cpf });

    return response.status(204).json();

  }
}