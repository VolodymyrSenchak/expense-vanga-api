
import { Application } from "express";
import {useHomeRoutes} from "./home.routes";

export function useRoutes(app: Application): void {
  app.use("/api", useHomeRoutes());
}