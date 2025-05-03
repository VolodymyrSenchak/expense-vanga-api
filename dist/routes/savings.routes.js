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
exports.useSavingsRoutes = void 0;
const express_1 = require("express");
const serviceFactory_1 = __importDefault(require("../services/serviceFactory"));
const validateToken_1 = require("../middlewares/validateToken");
const requestUtils_1 = require("../utils/requestUtils");
const savings_service_1 = require("../services/savings.service");
const useSavingsRoutes = () => {
    const router = (0, express_1.Router)();
    const savingsService = () => serviceFactory_1.default.getService(savings_service_1.SavingsService);
    router.get("/", validateToken_1.validateToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield savingsService().getSavings((0, requestUtils_1.getUserId)(req));
        (0, requestUtils_1.setResResult)(res, result, r => r === null || r === void 0 ? void 0 : r.payload);
    }));
    router.post("/", validateToken_1.validateToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield savingsService().saveSavings({ userId: (0, requestUtils_1.getUserId)(req), payload: req.body });
        (0, requestUtils_1.setResResult)(res, result);
    }));
    return router;
};
exports.useSavingsRoutes = useSavingsRoutes;
//# sourceMappingURL=savings.routes.js.map