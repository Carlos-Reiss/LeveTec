import { Request, Response } from 'express';
import ListarCursoService from '../services/ListarCursoService';

export default class CursoController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listarCurso = new ListarCursoService();

    const cursos = await listarCurso.execute();

    return response.json(cursos);
  }
}
