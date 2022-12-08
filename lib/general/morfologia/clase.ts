import Nomenclatura from "../nomenclatura";
import { Genero } from "./morfema-flexivo";

/**
 * Una **clase de palabras** es una propiedad de los segmentos sintácticos en
 * función de su significado y sus propiedades combinatorias fundamentales.
 */
export default class Clase<T extends string = string> {
  readonly nomenclatura: Nomenclatura<T>;
  /** Adjetivo en minúsculas que describe pertenencia o relación a la categoría,
   * p. ej., "nominal". */
  private _adjetivo: string | { masculino: string; femenino: string };
  readonly lexema: boolean;

  constructor({
    nomenclatura,
    adjetivo,
    lexema,
  }: {
    nomenclatura: Nomenclatura<T>;
    adjetivo: string | { masculino: string; femenino: string };
    lexema: boolean;
  }) {
    this.nomenclatura = nomenclatura;
    this._adjetivo = adjetivo;
    this.lexema = lexema;
  }

  /**
   * Devuelve el adjetivo que describe pertenencia o relación a esta categoría,
   * con la flexión adecuada.
   *
   * @param {Genero} genero - Género del adjetivo.
   */
  adjetivo(genero: Genero) {
    return typeof this._adjetivo === "string"
      ? this._adjetivo
      : genero === Genero.MASCULINO
      ? this._adjetivo.masculino
      : this._adjetivo.femenino;
  }

  get nombre(): string {
    return this.nomenclatura.nombrePrincipal;
  }
}