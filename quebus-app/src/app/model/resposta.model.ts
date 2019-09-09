import { Evaluation } from './evaluation.enum';

export class Resposta {
  constructor(
      public _id?: string,
      public user?: string,
      public comment?: string,
      public evaluation?: Evaluation
  ) {}
}
