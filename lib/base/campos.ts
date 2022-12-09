import CampoFinito from "./campo";
import Valor from "./valor";
import Nomenclatura from "./nomenclatura";

const genero = new CampoFinito({
  masculino: new Valor({ adjetivo: new Nomenclatura("masculino"), campos: {} }),
  femenino: new Valor({ adjetivo: new Nomenclatura("femenino"), campos: {} }),
});

const numero = new CampoFinito({
  singular: new Valor({ adjetivo: new Nomenclatura("singular"), campos: {} }),
  plural: new Valor({ adjetivo: new Nomenclatura("plural"), campos: {} }),
});

const clase = new CampoFinito({
  nombre: new Valor({
    nombre: new Nomenclatura("nombre", "sustantivo", "substantivo"),
    adjetivo: new Nomenclatura("nominal"),
    campos: { genero, numero },
  }),
  adjetivo: new Valor({
    nombre: new Nomenclatura("adjetivo"),
    adjetivo: new Nomenclatura("adjetival"),
    campos: { genero, numero },
  }),
});

export default clase;

clase.con({
  nombre: {
    genero: genero.con({ masculino: {} }),
    numero: numero.con({ plural: {} }),
  },
});
