import { Control } from "./Control";
import { Categories } from "../enums/Categories";
import { Tones } from "../enums/Tones";
import { BaseEntity } from "./BaseEntity";

export interface Pedal extends BaseEntity {
  manufactor: string;
  model: string;
  year: string;
  categories: Array<Categories>;
  tones: Array<Tones>;
  description: string;
  imageUrl: string;
  controls: Array<Control>
  size: string
}
