import CampoFinito from "../../base/campo";
import Valor from "../../base/valor";
import Nomenclatura from "../../base/nomenclatura";

const persona = new CampoFinito({
  primera: new Valor({
    caracteristicas: { adjetivo: new Nomenclatura("primera") },
    campos: {},
  }),
  segunda: new Valor({
    caracteristicas: { adjetivo: new Nomenclatura("segunda") },
    campos: {},
  }),
  tercera: new Valor({
    caracteristicas: { adjetivo: new Nomenclatura("tercera") },
    campos: {},
  }),
});

export default persona;
