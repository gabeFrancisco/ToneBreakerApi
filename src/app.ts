import express from 'express';
import cors from 'cors'
import bodyParser from 'body-parser';
import dotnev from 'dotenv'
import { router } from './router'

dotnev.config()

const app = express()

app.use(cors({
  credentials: false,
  origin: process.env.ORIGIN
}))

app.use(bodyParser.json());
app.use(router)

export default app