import { NextFunction, Request, Response } from "express";
import pedalService from "../services/pedalService";

const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    return res.json(await pedalService.getAllPedals())
  } catch (err) {
    console.log(err)
    next(err);
  }
};

export default {
  getAll,
};
