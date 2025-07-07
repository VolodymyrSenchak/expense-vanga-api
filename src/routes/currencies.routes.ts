import {Router} from "express";
import serviceFactory from "../services/serviceFactory";
import {validateToken} from "../middlewares/validateToken";
import {getUserId, setResResult} from "../utils/requestUtils";
import {CurrenciesService} from "../services/currencies.service";

export const useCurrenciesRoutes = () => {
  const router = Router();
  const savingsService = () => serviceFactory.getService(CurrenciesService);

  router.get("/", validateToken, async (req, res) => {
    const result = await savingsService().getCurrencies(getUserId(req));
    setResResult(res, result, r => r?.payload);
  });

  router.post("/", validateToken, async (req, res) => {
    const result = await savingsService().saveCurrencies({userId: getUserId(req), payload: req.body});
    setResResult(res, result);
  });

  return router;
};