import Segmento from "./segmento";

export default class Serie<T extends Segmento> {
  readonly segmentos: T[];

  constructor(segmentos: T[]) {
    this.segmentos = segmentos;
    segmentos.forEach((segmento, i) => {
      segmento.serie = this;
      segmento.asignaAnterior(segmentos[i - 1]);
      segmento.asignaPosterior(segmentos[i + 1]);
    });
  }

  a(numero: number) {
    return this.segmentos.at(numero);
  }
}
