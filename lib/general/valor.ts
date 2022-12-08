import Campo from "./campo";
import Nomenclatura from "./nomenclatura";
import { Opcional } from "./util";

export default class Valor<
  T extends string = string,
  U extends string | undefined = string | undefined,
  V extends { [key: string]: Campo<{ [key: string]: Valor }> | undefined } = {
    [key: string]: Campo<{ [key: string]: Valor }> | undefined;
  }
> {
  adjetivo: Nomenclatura<T>;
  nombre?: U extends string ? Nomenclatura<U> : undefined;
  implicito: boolean;
  campos: V;

  constructor({
    adjetivo,
    nombre,
    implicito = false,
    campos,
  }: {
    adjetivo: Nomenclatura<T>;
    nombre?: U extends string ? Nomenclatura<U> : undefined;
    implicito?: boolean;
    campos: V;
  }) {
    this.nombre = nombre;
    this.adjetivo = adjetivo;
    this.implicito = implicito;
    this.campos = campos;
  }

  con(campos: Opcional<V>) {
    return new Valor({
      adjetivo: this.adjetivo,
      nombre: this.nombre,
      implicito: this.implicito,
      campos,
    });
  }
}
