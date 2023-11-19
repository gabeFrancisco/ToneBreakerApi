import { CategoryDTO } from "../dtos/CategoryDTO";

export enum Categories {
  "Compressor",
  "Overdrive",
  "Distortion",
  "Fuzz",
  "Booster",
  "Delay",
  "Reverb",
  "Chorus",
  "Phaser",
  "Flanger",
  "Tremolo",
  "Univibe",
  "Rotary",
  "Wah",
  "Impulse Response",
  "Pitch-Shifter",
  "Octave",
  "EQ",
  "Filter",
  "Noise Gate",
  "Looper",
  "Tuner",
  "Expression",
  "Volume",
  "Multi-effects",
  "Rack Unit",
}

export const CategoriesList: Array<CategoryDTO> = [
  {
    name: Categories.Compressor,
    description:
      "The compressor limits the high signal of the guitar and raise the lower ones, sometimes losing dynamics and raising volume.",
  },
  {
    name: Categories.Overdrive,
    description:
      "A pedal that clips the guitar signal and saturates, emulating tube amps",
  },
];
