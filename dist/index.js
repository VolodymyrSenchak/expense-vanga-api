"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes");
const app = (0, express_1.default)();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 8080;
app.use((0, cors_1.default)({ origin: "http://localhost:8081" }));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
(0, routes_1.useRoutes)(app);
app
    .listen(PORT, "localhost", function () {
    console.log(`Server is running on port ${PORT}.`);
})
    .on("error", (err) => {
    if (err.code === "EADDRINUSE") {
        console.log("Error: address already in use");
    }
    else {
        console.log(err);
    }
});
//# sourceMappingURL=index.js.map