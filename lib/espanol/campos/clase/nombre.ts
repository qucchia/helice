import Valor from "../../../general/valor";
import Nomenclatura from "../../../general/nomenclatura";
import genero from "../genero";
import numero from "../numero";

const nombre = new Valor({
  nombre: new Nomenclatura("nombre", "sustantivo", "substantivo"),
  adjetivo: new Nomenclatura("nominal"),
  campos: { genero, numero },
});

export default nombre;
