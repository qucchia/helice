import Valor from "./valor";
import { Opcional } from "./util";

type CampoDe<T extends Valor | undefined> = T extends Valor<
  string,
  string | undefined,
  infer R
>
  ? R
  : undefined;

type Campos<
  T extends { [key: string]: Valor<string, string | undefined> | undefined }
> = {
  [key in keyof T]?: CampoDe<T[key]>;
};

/**
 * Un campo es un elemento abstracto que se usa para guardar información de una
 * característica particular.
 */
export default class Campo<
  T extends { [key: string]: Valor<string, string | undefined> }
> {
  /** Todas las posibles valores de este tipo de campo. */
  posibilidades: T;
  /** Los posibles valores que se sabe que puede tener este campo. */
  informacion: Campos<T>;

  static campos<
    T extends { [key: string]: Valor<string, string | undefined> | undefined }
  >(posibilidades: T) {
    return Object.fromEntries(
      Object.entries(posibilidades).map(([key, value]) => [key, value?.campos])
    ) as Campos<T>;
  }

  constructor(posibilidades: T, informacion?: Campos<T>) {
    this.posibilidades = posibilidades;
    if (!informacion) informacion = Campo.campos(posibilidades);
    this.informacion = informacion;
  }

  /**
   * @returns {Campo<T>} Un nuevo campo con las mismas posibilidades que esta
   * pero con la información dada.
   */
  con(informacion?: Campos<T>): Campo<T> {
    return new Campo(this.posibilidades, informacion);
  }

  puedeSer(valor: keyof T) {
    return Object.keys(this.informacion).includes(valor as string);
  }

  /**
   * @returns Todas las posibilidades que han sido eliminados, y que por
   * tanto no puede ser este campo.
   */
  get noEs(): Opcional<T> {
    const objeto: Opcional<T> = {};
    (Object.entries(this.posibilidades) as [keyof T, T[keyof T]][]).forEach(
      ([nombre, valor]) => {
        if (!Object.keys(this.informacion).includes(nombre as string)) {
          objeto[nombre] = valor;
        }
      }
    );
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
   * @param {...T} posibilidades Las posibilidades a eliminar.
   */
  elimina(...posibilidades: (keyof T)[]): this {
    posibilidades.forEach((valor) => delete this.informacion[valor]);
    return this;
  }

  /**
   * Restringe las posibilidades a las dadas.
   * @param {...T} posibilidades Las posibilidades a las cuales restringir.
   */
  restringe(...posibilidades: (keyof T)[]): this {
    Object.keys(this.informacion).forEach((valor) => {
      if (!posibilidades.includes(valor)) delete this.informacion[valor];
    });
    return this;
  }

  /**
   * Añade posibilidades.
   * @param {...T} posibilidades Las posibilidades a añadir.
   */
  anade(...posibilidades: (keyof T)[]): this {
    posibilidades.forEach(
      (valor) =>
        (this.informacion[valor] = this.posibilidades[valor].campos as CampoDe<
          T[keyof T]
        >)
    );
    return this;
  }

  /**
   * Invierte las posibilidades.
   */
  invierte(): this {
    this.informacion = Campo.campos(this.noEs);
    return this;
  }
}
