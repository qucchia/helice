import CampoFinito from "../../base/campo";
import Valor from "../../base/valor";
import Nomenclatura from "../../base/nomenclatura";

import genero from "./genero";
import numero from "./numero";
import persona from "./persona";
// TODO: modo, tiempo, aspecto

const accidente = new CampoFinito({
  genero: new Valor({ nombre: new Nomenclatura("género"), campos: { genero } }),
  numero: new Valor({ nombre: new Nomenclatura("número"), campos: { numero } }),
  persona: new Valor({
    nombre: new Nomenclatura("persona"),
    campos: { persona },
  }),
});

export default accidente;
