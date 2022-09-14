import express, { Request, Response } from 'express';
import routers from './routers/routers';

const app = express();

app.use(express.json());
app.use(routers);

app.get('/', (_req: Request, res: Response) => {
  res.status(200).send('Express + TS');
});

export default app;
