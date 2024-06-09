"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const CurrencyRoutes_1 = require("./api/routes/CurrencyRoutes");
const app = (0, express_1.default)();
const currencyRoutes = new CurrencyRoutes_1.CurrencyRoutes().getRoutes();
app.use((0, cors_1.default)());
dotenv_1.default.config();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/api/v1', currencyRoutes);
app.use('/api/v1', (_, res) => {
    res.json({ message: 'API / V1' });
});
app.use('/api', (_, res) => {
    res.json({ message: 'API' });
});
app.use('/', (_, res) => {
    res.json({ message: 'Página Inicial' });
});
app.use((err, request, response, next) => {
    if (err instanceof Error) {
        return response.status(400).json({
            message: err.message,
        });
    }
    return response.status(500).json({
        status: '500',
        message: 'Internal server error',
    });
});
app.listen(process.env.port || 3333);
exports.default = app;
//# sourceMappingURL=index.js.map