import Valor from "../../../general/valor";
import Nomenclatura from "../../../general/nomenclatura";
import genero from "../genero";
import numero from "../numero";

const adjetivo = new Valor({
  nombre: new Nomenclatura("adjetivo"),
  adjetivo: new Nomenclatura("adjetival"),
  campos: { genero, numero },
});

export default adjetivo;
