import { Categories } from "../enums/Categories";
import { BaseEntity } from "./BaseEntity";

export interface Category extends BaseEntity {
  name: Categories;
  description: string;
  pedalId: number;
}
