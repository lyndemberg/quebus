import { Evaluation } from './evaluation.enum';
import { Usuario } from './usuario.model';

export class RespostaRequest {
  constructor(
      public _id?: string,
      public user?: string,
      public comment?: string,
      public evaluation?: Evaluation
  ) {}
}

export class Resposta {
  constructor(
      public _id?: string,
      public user?: Usuario,
      public comment?: string,
      public evaluation?: Evaluation
  ) {}
}

