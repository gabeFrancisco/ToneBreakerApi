import { Router } from "express";
import pedalsController from "./controllers/pedalsController";

export const router = Router();

// router.get("/", (req, res) => {
//   console.log("\nUp to date! John!")
//   res.json("God bless you! Everything is ok!");
// });

router.get("/pedals", pedalsController.getAll)
