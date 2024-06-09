import { Request, Response } from 'express';
export class CurrencyController {
  async convert(_: Request, res: Response): Promise<void> {
    try {
      res.status(200).json({ message: "acessou!!!" });
    } catch (error) {
      res.status(400).json({ message: 'Error converting currencies' });
    }
  }
}
