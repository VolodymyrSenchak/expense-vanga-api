import {Router} from "express";
import serviceFactory from "../services/serviceFactory";
import {ExpensesService} from "../services/expenses.service";
import {validateToken} from "../middlewares/validateToken";
import {getReqContext} from "../utils/requestUtils";

export const useExpensesRoutes = () => {
  const router = Router();

  router.get("/expected", validateToken, async (req, res) => {
    const authService = serviceFactory.getService(ExpensesService);
    const result = await authService.getExpectedExpenses(getReqContext(req).user.id);
    const status = result ? 401 : 200;
    res.status(status).json(result);
  });

  router.post("/expected", validateToken, async (req, res) => {
    const authService = serviceFactory.getService(ExpensesService);
    const result = await authService.saveExpectedExpenses({ ...req.body, userId: getReqContext(req).user.id });
    const status = result ? 401 : 200;
    res.status(status).json(result);
  });

  return router;
};