import { Control } from "../types/Control";
import { Categories } from "../enums/Categories";
import { Tones } from "../enums/Tones";
import { BaseEntity } from "./BaseEntity";

export interface Pedal extends BaseEntity {
  manufactor: string;
  type: string;
  model: string;
  year: string;
  category: Array<Categories>;
  tones: Array<Tones>;
  description: string;
  imageUrl: string;
  controllers: Array<Control>
  size: string
}
