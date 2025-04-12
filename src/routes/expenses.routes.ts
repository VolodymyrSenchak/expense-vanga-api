import {Router} from "express";
import serviceFactory from "../services/serviceFactory";
import {ExpensesService} from "../services/expenses.service";
import {validateToken} from "../middlewares/validateToken";
import { getUserId, setResResult } from "../utils/requestUtils";

export const useExpensesRoutes = () => {
  const router = Router();
  const expSrv = () => serviceFactory.getService(ExpensesService);

  router.get("/expected", validateToken, async (req, res) => {
    const result = await expSrv().getExpectedExpenses(getUserId(req));
    setResResult(res, result, r => r?.payload);
  });

  router.post("/expected", validateToken, async (req, res) => {
    const result = await expSrv().saveExpectedExpenses({
      userId: getUserId(req),
      payload: req.body,
    });
    setResResult(res, result);
  });

  router.post("/actual", validateToken, async (req, res) => {
    const result = await expSrv().upsertActualExpense({
      userId: getUserId(req),
      date: req.body.date,
      payload: req.body,
    });
    setResResult(res, result);
  });

  router.delete("/actual", validateToken, async (req, res) => {
    const { date } = req.query;
    const result = await expSrv().removeActualExpense(getUserId(req), date as string);
    setResResult(res, result);
  });

  router.get("/actual", validateToken, async (req, res) => {
    const result = await expSrv().getActualExpenses(getUserId(req));
    setResResult(res, result, r => r.map(s => s.payload));
  });

  return router;
};