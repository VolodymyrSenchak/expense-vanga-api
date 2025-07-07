import { Application } from "express";
import {useHomeRoutes} from "./home.routes";
import {useAuthRoutes} from "./auth.routes";
import {useExpensesRoutes} from "./expenses.routes";
import {useSavingsRoutes} from "./savings.routes";
import {useCurrenciesRoutes} from "./currencies.routes";
import {useCurrentMoneyRoutes} from "./currentMoney.routes";

export function useRoutes(app: Application): void {
  app.use("/api", useHomeRoutes());
  app.use("/api/auth", useAuthRoutes());
  app.use("/api/expenses", useExpensesRoutes());
  app.use("/api/savings", useSavingsRoutes());
  app.use('/api/currencies', useCurrenciesRoutes());
  app.use('/api/currentMoney', useCurrentMoneyRoutes());
}