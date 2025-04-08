"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRoutes = useRoutes;
const home_routes_1 = require("./home.routes");
function useRoutes(app) {
    app.use("/api", (0, home_routes_1.useHomeRoutes)());
}
//# sourceMappingURL=index.js.map