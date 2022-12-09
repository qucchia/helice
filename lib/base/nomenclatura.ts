export default class Nomenclatura<T extends string = string> {
  principal: T;
  alternativos: Set<string>;

  constructor(principal: T, ...alternativos: T[]) {
    this.principal = principal;
    this.alternativos = new Set(alternativos);
  }
}
