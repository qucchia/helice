import CampoFinito from "../../base/campo";
import Valor from "../../base/valor";
import Nomenclatura from "../../base/nomenclatura";

const numero = new CampoFinito({
  singular: new Valor({
    caracteristicas: { adjetivo: new Nomenclatura("singular") },
    campos: {},
  }),
  plural: new Valor({
    caracteristicas: { adjetivo: new Nomenclatura("plural") },
    campos: {},
  }),
});

export default numero;
