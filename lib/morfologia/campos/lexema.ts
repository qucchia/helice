import CampoFinito from "../../base/campo";
import Valor from "../../base/valor";

const lexema = new CampoFinito({
  si: new Valor({ campos: {} }),
  no: new Valor({ campos: {} }),
});

export default lexema;
