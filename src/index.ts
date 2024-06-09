import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { CurrencyRoutes } from '@/api/routes/CurrencyRoutes';

const app: Application = express();

const currencyRoutes = new CurrencyRoutes().getRoutes();

app.use(cors());
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', currencyRoutes);
app.use('/api/v1', (_, res) => {
  res.json({ message: 'API / V1' })
});
app.use('/api', (_, res) => {
  res.json({ message: 'API' })
});
app.use('/', (_, res) => {
  res.json({ message: 'Página Inicial' })
});

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({
        message: err.message,
      });
    }
    return response.status(500).json({
      status: '500',
      message: 'Internal server error',
    });
  },
);

app.listen(process.env.port || 3333);

export default app;
