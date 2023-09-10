import { ControlType } from "../enums/ControlType";
import { BaseEntity } from "./BaseEntity";

export interface Control extends BaseEntity{
  type: ControlType;
  name: string;
  description: string;

}
