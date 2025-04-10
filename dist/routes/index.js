"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRoutes = useRoutes;
const home_routes_1 = require("./home.routes");
const auth_routes_1 = require("./auth.routes");
const expenses_routes_1 = require("./expenses.routes");
function useRoutes(app) {
    app.use("/api", (0, home_routes_1.useHomeRoutes)());
    app.use("/api/auth", (0, auth_routes_1.useAuthRoutes)());
    app.use("/api/expenses", (0, expenses_routes_1.useExpensesRoutes)());
}
//# sourceMappingURL=index.js.map