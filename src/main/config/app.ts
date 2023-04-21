import express from "express";
import { bodyParser } from "../middlewares/body-parser";
import { contentType } from "../middlewares/content-type";
import { cors } from "../middlewares/cors";
import { setupRoutes } from "./routes";

const app = express();
app.use(bodyParser);
setupRoutes(app);
app.use(contentType);
app.use(cors);

export default app;
