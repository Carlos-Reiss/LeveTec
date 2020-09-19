import { Request, Response } from 'express';
import CreatePessoaCursoService from '../services/CreatePessoaCursoService';

export default class PessoaCursoController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { pessoa_id, curso_id } = request.body;

    const createPessoaCurso = new CreatePessoaCursoService();

    const pessoaCursos = await createPessoaCurso.execute({
      pessoa_id,
      curso_id,
    });

    return response.json(pessoaCursos);
  }
}
