import Serie from "./serie";

/**
 * En gramática, un **segmento** (también llamado **elemento**, **unidad** o
 * **constituyente**) es cualquier elemento gramatical que se combina
 * con otros del mismo tipo en orden lineal.  Es decir, que cada segmento
 * tiene se relaciona con otro *anterior* y otro *posterior* a este, a no ser
 * que sea el primero o último de la serie, respectivamente.
 *
 * Los segmentos se clasifican en *fonéticos*, *morfológicos* y *sintácticos*.
 * Dentro de los fonéticos están los fonemas y las sílabas, dentro de los
 * morfológicos las grafías, los morfemas y las palabras, y dentro de los
 * sintácticos las palabras en sentido gramatical, los sintagmas y las
 * oraciones.
 */
export default class Segmento {
  private _anterior?: typeof this;
  private _posterior?: typeof this;
  serie?: Serie<this>;

  /**
   * @param {this} valor - El segmento anterior a este a asignar.
   */
  asignaAnterior(valor: typeof this | undefined) {
    this._anterior = valor;
  }

  /**
   * @param {this} valor - El segmento posterior a este a asignar.
   */
  asignaPosterior(valor: typeof this | undefined) {
    this._posterior = valor;
  }

  /**
   * @param {number} numero -
   * - Si es `undefined`, devuelve el segmento inmediatamente anterior a
   *   este.
   * - Si es un número positivo, devuelve el segmento este número de
   *   posiciones anterior a este.
   * - Si es un número negativo, devuelve el segmento este número de
   *   posiciones en valor absoluta posterior a este.
   *
   * Si dicho segmento no existe (p. ej. si no hay elemento anterior),
   * devuelve `undefined`.
   */
  anterior(numero?: number): typeof this | undefined {
    if (numero === 1 || numero === undefined) return this._anterior;
    if (numero < 0) return this.posterior(-numero);
    if (numero < 1) return this;
    return this._anterior && this._anterior.anterior(numero - 1);
  }

  /**
   * @param {number} numero -
   * - Si es `undefined`, devuelve el segmento inmediatamente posterior a
   *   este.
   * - Si es un número positivo, devuelve el segmento este número de
   *   posiciones posterior a este.
   * - Si es un número negativo, devuelve el segmento este número de
   *   posiciones en valor absoluta anterior a este.
   *
   * Si dicho segmento no existe (p. ej. si no hay elemento posterior),
   * devuelve `undefined`.
   */
  posterior(numero?: number): typeof this | undefined {
    if (numero === 1 || numero === undefined) return this._posterior;
    if (numero < 0) return this.anterior(-numero);
    if (numero < 1) return this;
    return this._posterior && this._posterior.posterior(numero - 1);
  }
}
