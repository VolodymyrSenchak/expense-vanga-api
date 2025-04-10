import {Router} from "express";
import serviceFactory from "../services/serviceFactory";
import {AuthService} from "../services/auth.service";



export const useAuthRoutes = () => {
  const router = Router();

  router.post("/login", async (req, res) => {
    const authService = serviceFactory.getService(AuthService);
    const result = await authService.login(req.body);
    const status = result ? 401 : 200;
    res.status(status).json(result);
  });

  router.post("/register", async (req, res) => {
    const authService = serviceFactory.getService(AuthService);
    const result = await authService.register(req.body);
    const status = result ? 401 : 200;
    res.status(status).json(result);
  });

  return router;
};