import { NextFunction, Request, Response } from "express";

const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    return res.json({ manufactor: "BK Buttler", model: "Tube Driver" });
  } catch (err) {
    console.log(err)
    next(err);
  }
};

export default {
  getAll,
};
