
import { Application } from "express";
import {useHomeRoutes} from "./home.routes";
import {useAuthRoutes} from "./auth.routes";
import {useExpensesRoutes} from "./expenses.routes";

export function useRoutes(app: Application): void {
  app.use("/api", useHomeRoutes());
  app.use("/api/auth", useAuthRoutes());
  app.use("/api/expenses", useExpensesRoutes());
}