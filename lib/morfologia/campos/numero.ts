import CampoFinito from "../../base/campo";
import Valor from "../../base/valor";
import Nomenclatura from "../../base/nomenclatura";

const numero = new CampoFinito({
  singular: new Valor({ adjetivo: new Nomenclatura("singular"), campos: {} }),
  plural: new Valor({ adjetivo: new Nomenclatura("plural"), campos: {} }),
});

export default numero;
