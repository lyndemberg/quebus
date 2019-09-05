export class Usuario {
  constructor(
      public name?: string,
      public email?: string,
      public user?: string,
      public gender?: string,
      public roles?: string[],
      public token?: string
  ) {}
}
