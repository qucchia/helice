import Segmento from "../base/segmento";
import Serie from "../base/serie";
import Morfema from "./morfema";
import clase from "./campos/clase";

type Clase = typeof clase;

export default class Palabra<T extends Clase = Clase> extends Segmento {
  morfemas?: Serie<Morfema<boolean>>;
  _representacion?: string;
  clase: T;

  constructor(morfemas: Serie<Morfema<boolean>> | string, clase: T) {
    super();
    if (typeof morfemas === "string") {
      this._representacion = morfemas;
    } else {
      this.morfemas = morfemas;
    }
    this.clase = clase;
  }

  get representacion(): string {
    return this._representacion || "";
  }
}
