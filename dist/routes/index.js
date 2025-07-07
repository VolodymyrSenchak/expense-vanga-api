"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRoutes = useRoutes;
const home_routes_1 = require("./home.routes");
const auth_routes_1 = require("./auth.routes");
const expenses_routes_1 = require("./expenses.routes");
const savings_routes_1 = require("./savings.routes");
const currencies_routes_1 = require("./currencies.routes");
const currentMoney_routes_1 = require("./currentMoney.routes");
function useRoutes(app) {
    app.use("/api", (0, home_routes_1.useHomeRoutes)());
    app.use("/api/auth", (0, auth_routes_1.useAuthRoutes)());
    app.use("/api/expenses", (0, expenses_routes_1.useExpensesRoutes)());
    app.use("/api/savings", (0, savings_routes_1.useSavingsRoutes)());
    app.use('./api/currencies', (0, currencies_routes_1.useCurrenciesRoutes)());
    app.use('./api/currentMoney', (0, currentMoney_routes_1.useCurrentMoneyRoutes)());
}
//# sourceMappingURL=index.js.map