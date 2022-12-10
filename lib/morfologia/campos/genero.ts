import CampoFinito from "../../base/campo";
import Valor from "../../base/valor";
import Nomenclatura from "../../base/nomenclatura";

const genero = new CampoFinito({
  masculino: new Valor({
    caracteristicas: { adjetivo: new Nomenclatura("masculino") },
    campos: {},
  }),
  femenino: new Valor({
    caracteristicas: { adjetivo: new Nomenclatura("femenino") },
    campos: {},
  }),
});

export default genero;
