import clase from "../morfologia/campos/clase";

export default interface Idioma {
  codigo: string;
  nombre: string;
  clase: typeof clase;
}
