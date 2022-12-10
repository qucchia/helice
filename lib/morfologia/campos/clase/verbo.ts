import Valor from "../../../base/valor";
import Nomenclatura from "../../../base/nomenclatura";
import numero from "../numero";
import lexema from "../lexema";

const verbo = new Valor({
  caracteristicas: {
    nombre: new Nomenclatura("verbo"),
    adjetivo: new Nomenclatura("verbal"),
  },
  campos: {
    numero,
    lexema: lexema.con({ si: lexema.valores.si }),
  },
});

export default verbo;
