import { Usuario } from './usuario.model';

export class PerguntaRequest {
  constructor(
      public _id?: string,
      public title?: string,
      public description?: string,
      public user?: Usuario
  ) {}
}

export class Pergunta {
  constructor(
      public _id?: string,
      public title?: string,
      public description?: string,
      public user?: Usuario
  ) {}
}
