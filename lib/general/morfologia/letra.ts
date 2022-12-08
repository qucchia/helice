// prettier-ignore
export type NombreDeLetra =
  | "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" | "i" | "j" | "k" | "l" | "m"
  | "n" | "ñ" | "o" | "p" | "q" | "r" | "s" | "t" | "u" | "v" | "w" | "x" | "y"
  | "z";

// prettier-ignore
export const NOMBRES_DE_LETRA = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ",
  "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
] as const;

export enum Diacritico {
  TILDE,
  DIERESIS,
}

export type LetraDiacritico = "á" | "é" | "í" | "ó" | "ú" | "ü";

export type Letra = NombreDeLetra | Diacritico;

export type LetraVocal = "a" | "e" | "i" | "o" | "u";
export type LetraConsonante = Exclude<NombreDeLetra, LetraVocal>;

export function esNombreDeLetra(valor: any): valor is NombreDeLetra {
  return NOMBRES_DE_LETRA.includes(valor as NombreDeLetra);
}

export function esLetra(valor: any) {
  return (
    typeof valor === "string" &&
    esNombreDeLetra(sinDiacritico(valor.toLowerCase()) as NombreDeLetra)
  );
}

export function sinDiacritico(letra: string) {
  // prettier-ignore
  switch (letra) {
    case "á": return "a";
    case "é": return "e";
    case "í": return "i";
    case "ó": return "o";
    case "ú": return "u";
    case "ü": return "u";
    default:  return letra;
  }
}

export function diacritico<T extends Letra>(letra: T) {
  switch (letra) {
    case "á":
    case "é":
    case "í":
    case "ó":
    case "ú":
      return Diacritico.TILDE;
    case "ü":
      return Diacritico.DIERESIS;
  }
}
