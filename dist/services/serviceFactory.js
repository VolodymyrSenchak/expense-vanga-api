"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_service_1 = require("./auth.service");
const expenses_service_1 = require("./expenses.service");
class ServiceFactory {
    constructor() {
        this.container = new Map();
        this.container.set(auth_service_1.AuthService, () => new auth_service_1.AuthService());
        this.container.set(expenses_service_1.ExpensesService, () => new expenses_service_1.ExpensesService());
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