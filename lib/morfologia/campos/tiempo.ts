import CampoFinito from "../../base/campo";
import Valor from "../../base/valor";
import Nomenclatura from "../../base/nomenclatura";

const tiempo = new CampoFinito({
  presente: new Valor({
    caracteristicas: { adjetivo: new Nomenclatura("presente") },
    campos: {},
  }),
});

export default tiempo;
