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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const supabaseDb_1 = require("../utils/supabaseDb");
const models_1 = require("../models");
class AuthService {
    constructor() {
        this.adminDb = (0, supabaseDb_1.getSupabaseAdminClient)();
    }
    register(command) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data, error } = yield this.adminDb.auth.signUp({
                email: command.email,
                password: command.password,
            });
            return error ? (0, models_1.failure)(error) : (0, models_1.success)(data);
        });
    }
    login(command) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data, error } = yield this.adminDb.auth.signInWithPassword({
                email: command.email,
                password: command.password,
            });
            return error ? (0, models_1.failure)(error) : (0, models_1.success)(data);
        });
    }
    refreshToken(refreshToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data, error } = yield this.adminDb.auth.refreshSession({
                refresh_token: refreshToken
            });
            return error ? (0, models_1.failure)(error) : (0, models_1.success)(data);
        });
    }
    getUser(jwt) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data, error } = yield this.adminDb.auth.getUser(jwt);
            return error ? (0, models_1.failure)(error) : (0, models_1.success)(data.user);
        });
    }
    resetPassword(command) {
        return __awaiter(this, void 0, void 0, function* () {
            const { error, data } = yield this.adminDb.auth.resetPasswordForEmail(command.email, { redirectTo: command.redirectTo });
            return error ? (0, models_1.failure)(error) : (0, models_1.success)(data);
        });
    }
    changePassword(command) {
        return __awaiter(this, void 0, void 0, function* () {
            const { error: verifyError } = yield this.adminDb.auth.signInWithPassword({
                email: command.email,
                password: command.currentPassword,
            });
            if (verifyError) {
                return (0, models_1.failure)("Current password is incorrect", "unauthorized");
            }
            const { error, data } = yield this.adminDb.auth.admin.updateUserById(command.userId, {
                password: command.newPassword,
            });
            return error ? (0, models_1.failure)(error) : (0, models_1.success)(data);
        });
    }
    changePasswordForgotten(command) {
        return __awaiter(this, void 0, void 0, function* () {
            const { error, data } = yield this.adminDb.auth.admin.updateUserById(command.userId, {
                password: command.newPassword,
            });
            return error ? (0, models_1.failure)(error) : (0, models_1.success)(data);
        });
    }
}
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map