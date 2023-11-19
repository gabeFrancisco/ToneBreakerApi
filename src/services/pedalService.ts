import db from '../database/db'
import { CategoryDTO } from '../dtos/CategoryDTO';
import { ControlDTO } from '../dtos/ControlDTO';
import { PedalDTO } from '../dtos/PedalDTO';
import { ToneDTO } from '../dtos/ToneDTO';
import { CategoriesList } from '../enums/Categories';
import { TonesList } from '../enums/Tones';
import { Category } from '../interfaces/Category';
import { Control } from '../interfaces/Control';
import { Pedal } from '../interfaces/Pedal'
import { Tone } from '../interfaces/Tone';

const getAllPedals = async (): Promise<Pedal[]> => {
  const { rows } = await db.query<Pedal>('select * from pedals');
  return rows;
}

const createPedal = async(pedalDto: PedalDTO): Promise<string> => {
  const categories: Array<CategoryDTO> = []
  const tones: Array<ToneDTO> = []

  pedalDto.categories.map(cat => {
    categories.push(CategoriesList.find(c => c.name.toString() === cat)!);
  })

  pedalDto.tones.map(to => {
    tones.push(TonesList.find(t => t.name.toString() === to)!)
  })
  
  
  return 'Pedal added!'
}

export default{
  getAllPedals
}