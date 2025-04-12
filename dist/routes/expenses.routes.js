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
    const expSrv = () => serviceFactory_1.default.getService(expenses_service_1.ExpensesService);
    router.get("/expected", validateToken_1.validateToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield expSrv().getExpectedExpenses((0, requestUtils_1.getUserId)(req));
        (0, requestUtils_1.setResResult)(res, result, r => r === null || r === void 0 ? void 0 : r.payload);
    }));
    router.post("/expected", validateToken_1.validateToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield expSrv().saveExpectedExpenses({
            userId: (0, requestUtils_1.getUserId)(req),
            payload: req.body,
        });
        (0, requestUtils_1.setResResult)(res, result);
    }));
    router.post("/actual", validateToken_1.validateToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield expSrv().upsertActualExpense({
            userId: (0, requestUtils_1.getUserId)(req),
            date: req.body.date,
            payload: req.body,
        });
        (0, requestUtils_1.setResResult)(res, result);
    }));
    router.delete("/actual", validateToken_1.validateToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { date } = req.query;
        const result = yield expSrv().removeActualExpense((0, requestUtils_1.getUserId)(req), date);
        (0, requestUtils_1.setResResult)(res, result);
    }));
    router.get("/actual", validateToken_1.validateToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield expSrv().getActualExpenses((0, requestUtils_1.getUserId)(req));
        (0, requestUtils_1.setResResult)(res, result, r => r.map(s => s.payload));
    }));
    return router;
};
exports.useExpensesRoutes = useExpensesRoutes;
//# sourceMappingURL=expenses.routes.js.map