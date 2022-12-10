import Valor from "./valor";
import { Opcional } from "./util";

type CampoDe<T extends Valor | undefined> = T extends Valor<
  { [key: string]: any },
  infer R
>
  ? R
  : undefined;

type Campos<T extends { [key: string]: Valor | undefined }> = {
  [key in keyof T]?: CampoDe<T[key]>;
};

/**
 * Un campo finito es un elemento abstracto que se usa para guardar información
 * de una característica particular.
 */
export class CampoFinito<
  Caracteristicas extends { [key: string]: any },
  Valores extends { [key: string]: Valor<Caracteristicas> }
> {
  /** Todas las posibles valores de este tipo de campo. */
  valores: Valores;
  /** Los posibles valores que se sabe que puede tener este campo. */
  informacion: Campos<Valores>;

  static campos<T extends { [key: string]: Valor | undefined }>(
    posibilidades: T
  ) {
    return Object.fromEntries(
      Object.entries(posibilidades).map(([key, value]) => [key, value?.campos])
    ) as Campos<T>;
  }

  constructor(valores: Valores, informacion?: Campos<Valores>) {
    this.valores = valores;
    if (!informacion) informacion = CampoFinito.campos(valores);
    this.informacion = informacion;
  }

  /**
   * @returns {CampoFinito<Valores>} Un nuevo campo con las mismas posibilidades que esta
   * pero con la información dada.
   */
  con(informacion?: Campos<Valores>): CampoFinito<Caracteristicas, Valores> {
    return new CampoFinito(this.valores, informacion);
  }

  puedeSer(valor: keyof Valores) {
    return Object.keys(this.informacion).includes(valor as string);
  }

  /**
   * @returns Todas las posibilidades que han sido eliminados, y que por
   * tanto no puede ser este campo.
   */
  get noEs(): Opcional<Valores> {
    const objeto: Opcional<Valores> = {};
    (
      Object.entries(this.valores) as [keyof Valores, Valores[keyof Valores]][]
    ).forEach(([nombre, valor]) => {
      if (!Object.keys(this.informacion).includes(nombre as string)) {
        objeto[nombre] = valor;
      }
    });
    return objeto;
  }

  /**
   * @returns Si el campo es conocido, devuelve esta única
   * posibilidad.
   */
  get conocido() {
    if (Object.keys(this.informacion).length === 1)
      return Object.values(this.informacion)[0];
  }

  /**
   * @returns {boolean} Si el campo es imposible, es decir si todas las
   * posibilidades han sido eliminadas.
   */
  get imposible(): boolean {
    return Object.keys(this.informacion).length === 0;
  }

  /**
   * Elimina posibilidades.
   * @param {...Valores} posibilidades Las posibilidades a eliminar.
   */
  elimina(...posibilidades: (keyof Valores)[]): this {
    posibilidades.forEach((valor) => delete this.informacion[valor]);
    return this;
  }

  /**
   * Restringe las posibilidades a las dadas.
   * @param {...Valores} posibilidades Las posibilidades a las cuales restringir.
   */
  restringe(...posibilidades: (keyof Valores)[]): this {
    Object.keys(this.informacion).forEach((valor) => {
      if (!posibilidades.includes(valor)) delete this.informacion[valor];
    });
    return this;
  }

  /**
   * Añade posibilidades.
   * @param {...Valores} posibilidades Las posibilidades a añadir.
   */
  anade(...posibilidades: (keyof Valores)[]): this {
    posibilidades.forEach(
      (valor) =>
        (this.informacion[valor] = this.valores[valor].campos as CampoDe<
          Valores[keyof Valores]
        >)
    );
    return this;
  }

  /**
   * Invierte las posibilidades.
   */
  invierte(): this {
    this.informacion = CampoFinito.campos(this.noEs);
    return this;
  }
}

export default CampoFinito;

export class CampoInfinito<T extends any> {
  informacion: T[];
  noEs: T[];

  constructor(informacion: T[], noEs: T[] = []) {
    this.informacion = informacion;
    this.noEs = noEs;
  }
}
