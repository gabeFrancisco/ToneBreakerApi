import { ControlType } from "../enums/ControlType";

export interface ControlDTO{
  type: ControlType
  name: string;
  description: string;
}