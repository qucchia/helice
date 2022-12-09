import Grafia from "./grafia";
import Segmento from "../base/segmento";
import Serie from "../base/serie";
import { NombreDeLetra } from "./letra";

export default class Morfema<T extends boolean> extends Segmento {
  readonly grafias: Serie<Grafia<NombreDeLetra, false>>;
  readonly lexema: T;

  constructor(representacion: string, lexema: T) {
    super();
    this.grafias = new Serie(
      representacion
        .split("")
        .map((letra) => Grafia.deRepresentacion(letra, false))
    );
    this.lexema = lexema;
  }
}

export class Lexema extends Morfema<true> {
  constructor(representacion: string) {
    super(representacion, true);
  }
}

export class MorfemaGramatical<T extends boolean> extends Morfema<false> {
  libre: T;

  constructor(representacion: string, libre: T) {
    super(representacion, false);
    this.libre = libre;
  }
}

export class MorfemaLibre extends MorfemaGramatical<true> {
  constructor(representacion: string) {
    super(representacion, true);
  }
}

export class Afijo<T extends boolean> extends MorfemaGramatical<false> {
  derivativo: T;

  constructor(representacion: string, derivativo: T) {
    super(representacion, false);
    this.derivativo = derivativo;
  }
}

export class MorfemaDerivativo extends Afijo<true> {
  tipo: "prefijo" | "sufijo" | "interfijo";

  constructor(
    representacion: string,
    tipo: "prefijo" | "sufijo" | "interfijo"
  ) {
    super(representacion, true);
    this.tipo = tipo;
  }
}
