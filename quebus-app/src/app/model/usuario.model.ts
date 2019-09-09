export class Usuario {
  constructor(
      public _id?: string,
      public name?: string,
      public email?: string,
      public user?: string,
      public password?: string,
      public gender?: string,
      public roles?: string[],
      public token?: string
  ) {}
}
