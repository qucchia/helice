import CampoFinito from "./campo";
import { Opcional } from "./util";

export default class Valor<
  Caracteristicas extends { [key: string]: any } = { [key: string]: any },
  Campos extends {
    [key: string]:
      | CampoFinito<{ [key: string]: any }, { [key: string]: Valor }>
      | undefined;
  } = {
    [key: string]:
      | CampoFinito<{ [key: string]: any }, { [key: string]: Valor }>
      | undefined;
  }
> {
  caracteristicas: Caracteristicas;
  implicito: boolean;
  campos: Campos;

  constructor({
    campos,
    caracteristicas,
    implicito = false,
  }: {
    campos: Campos;
    caracteristicas: Caracteristicas;
    implicito?: boolean;
  }) {
    this.caracteristicas = caracteristicas;
    this.implicito = implicito;
    this.campos = campos;
  }

  con(campos: Opcional<Campos>) {
    return new Valor({
      campos,
      caracteristicas: this.caracteristicas,
      implicito: this.implicito,
    });
  }
}
