import db from '../database/db'
import { Pedal } from '../interfaces/Pedal'

const getAllPedals = async (): Promise<Pedal[]> => {
  const { rows } = await db.query<Pedal>('select * from pedals');
  return rows;
}

export default{
  getAllPedals
}