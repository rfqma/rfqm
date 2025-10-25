interface Social {
  label: string;
  href: string;
  target: string;
}

interface Experience {
  site: string;
  time: string;
  role: string;
}

enum ArtType {
  ASCII = "ASCII",
  ASCII_COLOR = "ASCII_COLOR",
  ASCII_COLOR_BG_IMAGE = "ASCII_COLOR_BG_IMAGE",
}

export type { Social, Experience };
export { ArtType };
