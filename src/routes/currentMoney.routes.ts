import {Router} from "express";
import serviceFactory from "../services/serviceFactory";
import {validateToken} from "../middlewares/validateToken";
import {getUserId, setResResult} from "../utils/requestUtils";
import {CurrentMoneyService} from "../services/currentMoney.service";

export const useCurrentMoneyRoutes = () => {
  const router = Router();
  const savingsService = () => serviceFactory.getService(CurrentMoneyService);

  router.get("/", validateToken, async (req, res) => {
    const result = await savingsService().getCurrentMoney(getUserId(req));
    setResResult(res, result, r => r?.payload);
  });

  router.post("/", validateToken, async (req, res) => {
    const result = await savingsService().saveCurrentMoney({userId: getUserId(req), payload: req.body});
    setResResult(res, result);
  });

  return router;
};