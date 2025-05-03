import {Router} from "express";
import serviceFactory from "../services/serviceFactory";
import {validateToken} from "../middlewares/validateToken";
import {getUserId, setResResult} from "../utils/requestUtils";
import {SavingsService} from "../services/savings.service";

export const useSavingsRoutes = () => {
  const router = Router();
  const savingsService = () => serviceFactory.getService(SavingsService);

  router.get("/", validateToken, async (req, res) => {
    const result = await savingsService().getSavings(getUserId(req));
    setResResult(res, result, r => r?.payload);
  });

  router.post("/", validateToken, async (req, res) => {
    const result = await savingsService().saveSavings({userId: getUserId(req), payload: req.body});
    setResResult(res, result);
  });

  return router;
};