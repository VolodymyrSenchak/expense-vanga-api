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
exports.ExpensesService = void 0;
const supabaseDb_1 = require("../utils/supabaseDb");
const models_1 = require("../models");
class ExpensesService {
    constructor() {
        this.db = (0, supabaseDb_1.getSupabaseClient)();
        this.expectedExpensesTable = 'expected_expenses';
        this.actualExpensesTable = 'actual_expenses';
    }
    getExpectedExpenses(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data, error } = yield this.db
                .from(this.expectedExpensesTable)
                .select()
                .eq('userId', userId);
            return (0, models_1.fromDbResult)(data[0], error);
        });
    }
    saveExpectedExpenses(expectedExpenses) {
        return __awaiter(this, void 0, void 0, function* () {
            const { error } = yield this.db
                .from(this.expectedExpensesTable)
                .upsert(expectedExpenses);
            return (0, models_1.fromDbResult)(true, error);
        });
    }
    upsertActualExpense(expense) {
        return __awaiter(this, void 0, void 0, function* () {
            const { error } = yield this.db
                .from(this.actualExpensesTable)
                .upsert(expense);
            return (0, models_1.fromDbResult)(true, error);
        });
    }
    removeActualExpense(userId, date) {
        return __awaiter(this, void 0, void 0, function* () {
            const { error } = yield this.db
                .from(this.actualExpensesTable)
                .delete()
                .eq('userId', userId).eq('date', date);
            return (0, models_1.fromDbResult)(true, error);
        });
    }
    getActualExpenses(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data, error } = yield this.db
                .from(this.actualExpensesTable)
                .select()
                .eq('userId', userId);
            return (0, models_1.fromDbResult)(data, error);
        });
    }
}
exports.ExpensesService = ExpensesService;
//# sourceMappingURL=expenses.service.js.map