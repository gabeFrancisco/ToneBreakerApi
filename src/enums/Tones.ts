import { ToneDTO } from "../dtos/ToneDTO";

export enum Tones{
  "Warm",
  "Fuzzy",
  "Bluesy",
  "Tube",
  "Agressive",
  "Dynamic",
  "Harsh",
  "Heavy",
  "Gilmourish!",
  "Round",
  "Wide",
  "Bright",
  "Dark",
  "Long",
  "Short",
  "Exotic",
  "Spaceful",
  "Psychedelic",
  "Spring",
  "Analogic",
  "Digital",
  "Classic",
}

export const TonesList: Array<ToneDTO> = [
  {
    name: Tones.Warm,
    description: "A hot, brown and vintage tone, with more bass and mid frequencies."
  },
  {
    name: Tones.Tube,
    description: "Warm, dynamic and colourful vintage tone that comes from tubes."
  }
]