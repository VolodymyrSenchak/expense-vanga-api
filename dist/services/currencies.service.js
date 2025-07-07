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
exports.CurrenciesService = void 0;
const supabaseDb_1 = require("../utils/supabaseDb");
const models_1 = require("../models");
class CurrenciesService {
    constructor() {
        this.db = (0, supabaseDb_1.getSupabaseClient)();
        this.currenciesTable = 'currencies';
    }
    getCurrencies(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data, error } = yield this.db
                .from(this.currenciesTable)
                .select()
                .eq('userId', userId);
            return (0, models_1.fromDbResult)(data[0], error);
        });
    }
    saveCurrencies(savings) {
        return __awaiter(this, void 0, void 0, function* () {
            const { error } = yield this.db
                .from(this.currenciesTable)
                .upsert(savings);
            return (0, models_1.fromDbResult)(true, error);
        });
    }
}
exports.CurrenciesService = CurrenciesService;
//# sourceMappingURL=currencies.service.js.map