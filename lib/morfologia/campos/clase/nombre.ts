import Valor from "../../../base/valor";
import Nomenclatura from "../../../base/nomenclatura";
import genero from "../genero";
import numero from "../numero";
import lexema from "../lexema";

const nombre = new Valor({
  nombre: new Nomenclatura("nombre", "sustantivo", "substantivo"),
  adjetivo: new Nomenclatura("nominal"),
  campos: {
    genero,
    numero,
    lexema: lexema.con({ si: lexema.posibilidades.si }),
  },
});

export default nombre;
