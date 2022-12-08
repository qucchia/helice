import Segmento from "../segmento";
import Serie from "../serie";
import Morfema from "./morfema";
import Clase from "./clase";

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
