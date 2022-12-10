import Valor from "../../../base/valor";
import Nomenclatura from "../../../base/nomenclatura";
import genero from "../genero";
import numero from "../numero";
import lexema from "../lexema";

const adjetivo = new Valor({
  caracteristicas: {
    nombre: new Nomenclatura("adjetivo"),
    adjetivo: new Nomenclatura("adjetival"),
  },
  campos: {
    genero,
    numero,
    lexema: lexema.con({ si: lexema.valores.si }),
  },
});

export default adjetivo;
