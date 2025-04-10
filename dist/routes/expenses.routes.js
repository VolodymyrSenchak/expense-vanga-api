"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useExpensesRoutes = void 0;
const express_1 = require("express");
const serviceFactory_1 = __importDefault(require("../services/serviceFactory"));
const expenses_service_1 = require("../services/expenses.service");
const validateToken_1 = require("../middlewares/validateToken");
const requestUtils_1 = require("../utils/requestUtils");
const useExpensesRoutes = () => {
    const router = (0, express_1.Router)();
    router.get("/expected", validateToken_1.validateToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const authService = serviceFactory_1.default.getService(expenses_service_1.ExpensesService);
        const result = yield authService.getExpectedExpenses((0, requestUtils_1.getReqContext)(req).user.id);
        const status = result ? 401 : 200;
        res.status(status).json(result);
    }));
    router.post("/expected", validateToken_1.validateToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const authService = serviceFactory_1.default.getService(expenses_service_1.ExpensesService);
        const result = yield authService.saveExpectedExpenses(Object.assign(Object.assign({}, req.body), { userId: (0, requestUtils_1.getReqContext)(req).user.id }));
        const status = result ? 401 : 200;
        res.status(status).json(result);
    }));
    return router;
};
exports.useExpensesRoutes = useExpensesRoutes;
//# sourceMappingURL=expenses.routes.js.map