import wiki from "wikijs";
import Palabra from "./morfologia/palabra";
import Idioma from "./base/idioma";
import CLASE from "./morfologia/campos/clase";

type Clase = typeof CLASE;

type Content = Array<{
  title: string;
  content: string;
  items: { title: string; content: string }[];
}>;

export default function cogePalabra(
  palabra: string,
  idioma: Idioma
): Promise<Palabra[]> {
  return new Promise<Palabra[]>((resolve, reject) => {
    wiki({ apiUrl: `https://${idioma.codigo}.wiktionary.org/w/api.php` })
      .page(palabra)
      .catch(() => reject())
      .then((articulo) => {
        if (!articulo) return reject();

        // The type definitions for WikiJS are wrong and have to be fixed
        // This ideally should be simply called as articulo.content()
        (articulo.content as unknown as () => Promise<Content>)().then(
          (content: Content) => {
            const apartado = content.find(
              (apartado) => apartado.title === idioma.nombre
            );
            if (!apartado) return reject();
            console.log(apartado.items);
            // resolve(
            //   apartado.items
            //     .map((item) =>
            //       Object.values(idioma.clase.posibilidades).find(
            //         (clase) =>
            //           clase.nombre?.principal === item.title.toLowerCase()
            //       )
            //     )
            //     .filter((clase) => clase)
            //     .map((clase) => new Palabra(palabra, CLASE.con(clase)))
            // );
          }
        );
      });
  });
}
