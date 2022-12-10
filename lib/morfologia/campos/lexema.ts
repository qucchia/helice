import CampoFinito from "../../base/campo";
import Valor from "../../base/valor";

const lexema = new CampoFinito({
  si: new Valor({ campos: {}, caracteristicas: {} }),
  no: new Valor({ campos: {}, caracteristicas: {} }),
});

export default lexema;
