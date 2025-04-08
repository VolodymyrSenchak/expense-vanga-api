import express, { Application } from "express";
import cors from "cors";
import {useRoutes} from "./routes";

const app: Application = express();

const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 8080;
app.use(cors({ origin: "http://localhost:8081"}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
useRoutes(app);

app
  .listen(PORT, "localhost", function () {
    console.log(`Server is running on port ${PORT}.`);
  })
  .on("error", (err: any) => {
    if (err.code === "EADDRINUSE") {
      console.log("Error: address already in use");
    } else {
      console.log(err);
    }
  });