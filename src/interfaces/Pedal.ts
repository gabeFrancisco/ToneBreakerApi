import { Categories } from "../enums/Categories";
import { BaseEntity } from "./BaseEntity";

export interface Pedal extends BaseEntity {
  manufactor: string;
  type: string;
  model: string;
  year: string;
  category: Array<Categories>;
  description: string;
}
