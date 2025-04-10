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
exports.useAuthRoutes = void 0;
const express_1 = require("express");
const serviceFactory_1 = __importDefault(require("../services/serviceFactory"));
const auth_service_1 = require("../services/auth.service");
const useAuthRoutes = () => {
    const router = (0, express_1.Router)();
    router.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const authService = serviceFactory_1.default.getService(auth_service_1.AuthService);
        const result = yield authService.login(req.body);
        const status = result ? 401 : 200;
        res.status(status).json(result);
    }));
    router.post("/register", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const authService = serviceFactory_1.default.getService(auth_service_1.AuthService);
        const result = yield authService.register(req.body);
        const status = result ? 401 : 200;
        res.status(status).json(result);
    }));
    return router;
};
exports.useAuthRoutes = useAuthRoutes;
//# sourceMappingURL=auth.routes.js.map