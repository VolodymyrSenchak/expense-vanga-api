import {AuthService} from "./auth.service";
import {ExpensesService} from "./expenses.service";
import {SavingsService} from "./savings.service";
import {CurrentMoneyService} from "./currentMoney.service";
import {CurrenciesService} from "./currencies.service";

class ServiceFactory {
  private readonly container = new Map<Function, () => object>();

  constructor() {
    this.container.set(AuthService, () => new AuthService());
    this.container.set(ExpensesService, () => new ExpensesService());
    this.container.set(SavingsService, () => new SavingsService());
    this.container.set(CurrentMoneyService, () => new CurrentMoneyService());
    this.container.set(CurrenciesService, () => new CurrenciesService());
  }

  getService<T>(service: new (...args: any[]) => T): T {
    const serviceFactory = this.container.get(service);
    if (!serviceFactory) {
      throw new Error(`Service ${service.name} is not registered in the container.`);
    }
    return serviceFactory() as T;
  }
}

export default new ServiceFactory();