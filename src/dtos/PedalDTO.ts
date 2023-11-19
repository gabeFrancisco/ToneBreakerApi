import { ControlDTO } from "./ControlDTO";

export interface PedalDTO{
  id: number,
  manufactor: string;
  model: string;
  year: string;
  categories: Array<string>;
  tones: Array<string>;
  description: string;
  imageUrl: string;
  controls: Array<ControlDTO>
  size: string
}