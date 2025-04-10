import express, { Application } from "express";
import cors from "cors";
import {useRoutes} from "./routes";
import {ENV_VARIABLES} from "./utils/envVariables";

const app: Application = express();

app.use(cors({ origin: "http://localhost:8080"}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
useRoutes(app);

app
  .listen(ENV_VARIABLES.port, "localhost", function () {
    console.log(`Server is running on port ${ENV_VARIABLES.port}.`);
  })
  .on("error", (err: any) => {
    if (err.code === "EADDRINUSE") {
      console.log("Error: address already in use");
    } else {
      console.log(err);
    }
  });