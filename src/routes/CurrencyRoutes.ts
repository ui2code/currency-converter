import { Router } from 'express';
import { CurrencyController } from '@/controllers/CurrencyController';

export class CurrencyRoutes {
  private router: Router;
  private currencyController: CurrencyController;

  constructor() {
    this.router = Router();
    this.currencyController = new CurrencyController();
  }

  getRoutes(): Router {
    this.router.get(
      '/currency',
      this.currencyController.convert.bind(this.currencyController),
    );
    return this.router;
  }
}
