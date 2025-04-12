import {Router} from "express";
import serviceFactory from "../services/serviceFactory";
import {AuthService} from "../services/auth.service";
import {getReqContext, setResResult} from "../utils/requestUtils";
import {validateToken} from "../middlewares/validateToken";

export const useAuthRoutes = () => {
  const router = Router();
  const authSrv = () => serviceFactory.getService(AuthService);

  router.post("/login", async (req, res) => {
    const result = await authSrv().login(req.body);
    setResResult(res, result, null, 401);
  });

  router.post("/refreshToken", async (req, res) => {
    const { refreshToken } = req.body;
    const result = await authSrv().refreshToken(refreshToken);
    setResResult(res, result, null, 401);
  });

  router.post( "/register", async (req, res) => {
    const result = await authSrv().register(req.body);
    setResResult(res, result);
  });

  router.get("/userDetails", validateToken, (req, res) => {
    const user = getReqContext(req).user;
    res.status(200).json(user);
  });

  return router;
};