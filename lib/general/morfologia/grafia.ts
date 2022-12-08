import Segmento from "../segmento";
import {
  LetraVocal,
  NombreDeLetra,
  Diacritico,
  esNombreDeLetra,
  sinDiacritico,
  diacritico,
} from "./letra";

type PosibleDiacritico<T extends NombreDeLetra> = T extends "u"
  ? Diacritico
  : T extends LetraVocal
  ? Diacritico.TILDE | undefined
  : undefined;

export default class Grafia<
  T extends NombreDeLetra,
  U extends boolean
> extends Segmento {
  letra: T;
  mayuscula: U;
  diacritico?: PosibleDiacritico<T>;

  constructor(letra: T, mayuscula: U, diacritico?: PosibleDiacritico<T>) {
    super();
    this.letra = letra;
    this.mayuscula = mayuscula;
    this.diacritico = diacritico;
  }

  static deRepresentacion(
    representacion: string
  ): Grafia<NombreDeLetra, boolean>;
  static deRepresentacion<T extends boolean>(
    representacion: string,
    mayuscula: T
  ): Grafia<NombreDeLetra, T>;
  static deRepresentacion(representacion: string, mayuscula?: boolean) {
    const letra = representacion.toLowerCase();
    const l = sinDiacritico(letra);
    if (!esNombreDeLetra(l)) {
      throw `Error tipográfico: letra "${representacion}" no válida`;
    }
    return new Grafia(
      l,
      mayuscula !== undefined
        ? mayuscula
        : representacion.toUpperCase() === representacion,
      diacritico(l)
    );
  }
}
