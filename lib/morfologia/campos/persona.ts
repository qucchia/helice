import CampoFinito from "../../base/campo";
import Valor from "../../base/valor";
import Nomenclatura from "../../base/nomenclatura";

const persona = new CampoFinito({
  primera: new Valor({ adjetivo: new Nomenclatura("primera"), campos: {} }),
  segunda: new Valor({ adjetivo: new Nomenclatura("segunda"), campos: {} }),
  tercera: new Valor({ adjetivo: new Nomenclatura("tercera"), campos: {} }),
});

export default persona;
