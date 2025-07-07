"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_service_1 = require("./auth.service");
const expenses_service_1 = require("./expenses.service");
const savings_service_1 = require("./savings.service");
const currentMoney_service_1 = require("./currentMoney.service");
const currencies_service_1 = require("./currencies.service");
class ServiceFactory {
    constructor() {
        this.container = new Map();
        this.container.set(auth_service_1.AuthService, () => new auth_service_1.AuthService());
        this.container.set(expenses_service_1.ExpensesService, () => new expenses_service_1.ExpensesService());
        this.container.set(savings_service_1.SavingsService, () => new savings_service_1.SavingsService());
        this.container.set(currentMoney_service_1.CurrentMoneyService, () => new currentMoney_service_1.CurrentMoneyService());
        this.container.set(currencies_service_1.CurrenciesService, () => new currencies_service_1.CurrenciesService());
    }
    getService(service) {
        const serviceFactory = this.container.get(service);
        if (!serviceFactory) {
            throw new Error(`Service ${service.name} is not registered in the container.`);
        }
        return serviceFactory();
    }
}
exports.default = new ServiceFactory();
//# sourceMappingURL=serviceFactory.js.map