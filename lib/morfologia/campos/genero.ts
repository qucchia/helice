import CampoFinito from "../../base/campo";
import Valor from "../../base/valor";
import Nomenclatura from "../../base/nomenclatura";

const genero = new CampoFinito({
  masculino: new Valor({ adjetivo: new Nomenclatura("masculino"), campos: {} }),
  femenino: new Valor({ adjetivo: new Nomenclatura("femenino"), campos: {} }),
});

export default genero;
