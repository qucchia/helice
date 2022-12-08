import Campo from "./campo";

export default interface Idioma {
  codigo: string;
  nombre: string;
  clase: Campo<any>;
}
