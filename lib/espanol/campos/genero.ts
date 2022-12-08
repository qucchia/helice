import Campo from "../../general/campo";
import Valor from "../../general/valor";
import Nomenclatura from "../../general/nomenclatura";

const genero = new Campo({
  masculino: new Valor({ adjetivo: new Nomenclatura("masculino"), campos: {} }),
  femenino: new Valor({ adjetivo: new Nomenclatura("femenino"), campos: {} }),
});

export default genero;
