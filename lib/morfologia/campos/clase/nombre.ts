import Valor from "../../../base/valor";
import Nomenclatura from "../../../base/nomenclatura";
import genero from "../genero";
import numero from "../numero";
import lexema from "../lexema";

const nombre = new Valor({
  caracteristicas: {
    nombre: new Nomenclatura("nombre", "sustantivo", "substantivo"),
    adjetivo: new Nomenclatura("nominal"),
  },
  campos: {
    genero,
    numero,
    lexema: lexema.con({ si: lexema.valores.si }),
  },
});

export default nombre;
