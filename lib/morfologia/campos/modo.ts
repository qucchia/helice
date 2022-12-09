import CampoFinito from "../../base/campo";
import Valor from "../../base/valor";
import Nomenclatura from "../../base/nomenclatura";
import tiempo from "./tiempo";

const modo = new CampoFinito({
  indicativo: new Valor({
    adjetivo: new Nomenclatura("indicativo"),
    campos: { tiempo },
  }),
  subjuntivo: new Valor({
    adjetivo: new Nomenclatura("subjuntivo"),
    campos: { tiempo },
  }),
  imperativo: new Valor({
    adjetivo: new Nomenclatura("imperativo"),
    campos: {},
  }),
});

export default modo;
