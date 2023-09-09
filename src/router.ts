import { Router } from "express";

export const router = Router();

router.get("/", (req, res) => {
  console.log("\nUp to date! John!")
  res.json("God bless you! Everything is ok!");
});
