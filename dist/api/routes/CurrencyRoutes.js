"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyRoutes = void 0;
const express_1 = require("express");
const CurrencyController_1 = require("../controllers/CurrencyController");
class CurrencyRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.currencyController = new CurrencyController_1.CurrencyController();
    }
    getRoutes() {
        this.router.get('/currency', this.currencyController.convert.bind(this.currencyController));
        return this.router;
    }
}
exports.CurrencyRoutes = CurrencyRoutes;
//# sourceMappingURL=CurrencyRoutes.js.map