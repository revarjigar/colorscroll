import { HSV, HSL, RGB, CMYK, XYZ } from 'colorscroll/shared';

export type ColorApiColor<T>
  = T & {
      fraction: T;
      value: string;
    };

export enum ColorSchemeMode {
  Monochrome = 'monochrome',
  MonochromeDark = 'monochrome-dark',
  MonochromeLight = 'monochrome-light',
  Analogic = 'analogic',
  Complement = 'complement',
  AnalogicComplement = 'analogic-complement',
  Triad = 'triad',
  Quad = 'quad'
}

export interface ColorImage {
  bare: string;
  named: string;
}

export interface ColorDetails {
  cmyk: ColorApiColor<CMYK>;
  hsl: ColorApiColor<HSL>;
  hsv: ColorApiColor<HSV>;
  rgb: ColorApiColor<RGB>;
  XYZ: ColorApiColor<XYZ>;
  hex: {
    value: string;
    clean: string;
  }
  name: {
    value: string;
    closest_named_hex: string;
    exact_match_name: boolean;
    distance: number;
  }
  image: ColorImage;
  contrast: {
    value: string;
  }
}

export interface ColorScheme {
  mode: ColorScheme;
  count: number;
  colors: ColorDetails[];
  seed: ColorDetails;
  image: ColorImage;
}
