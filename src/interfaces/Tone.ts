import { Tones } from "../enums/Tones";
import { BaseEntity } from "./BaseEntity";

export interface Tone extends BaseEntity{
  name: Tones
  description: string
  pedalId: number
}