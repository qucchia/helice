import Afijo from "./morfema";

enum Accidente {
  GENERO,
  NUMERO,
  PERSONA,
  TIEMPO,
  MODO,
  ASPECTO,
}

export class MorfemaFlexivo<T extends Accidente> extends Afijo<false> {
  aspecto: T;

  constructor(representacion: string, aspecto: T) {
    super(representacion, false);
    this.aspecto = aspecto;
  }
}

export enum Genero {
  MASCULINO,
  FEMENINO,
}

export class MorfemaGenero extends MorfemaFlexivo<Accidente.GENERO> {
  genero: Genero;

  constructor(representacion: string, genero: Genero) {
    super(representacion, Accidente.GENERO);
    this.genero = genero;
  }
}

export enum Numero {
  SINGULAR,
  PLURAL,
}

export class MorfemaNumero extends MorfemaFlexivo<Accidente.NUMERO> {
  numero: Numero;

  constructor(representacion: string, numero: Numero) {
    super(representacion, Accidente.NUMERO);
    this.numero = numero;
  }
}
