import Valor from "../../../base/valor";
import Nomenclatura from "../../../base/nomenclatura";
import numero from "../numero";
import lexema from "../lexema";

const verbo = new Valor({
  nombre: new Nomenclatura("verbo"),
  adjetivo: new Nomenclatura("verbal"),
  campos: {
    numero,
    lexema: lexema.con({ si: lexema.posibilidades.si }),
  },
});

export default verbo;
