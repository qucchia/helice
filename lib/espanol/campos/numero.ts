import Campo from "../../general/campo";
import Valor from "../../general/valor";
import Nomenclatura from "../../general/nomenclatura";

const numero = new Campo({
  singular: new Valor({ adjetivo: new Nomenclatura("singular"), campos: {} }),
  plural: new Valor({ adjetivo: new Nomenclatura("plural"), campos: {} }),
});

export default numero;
