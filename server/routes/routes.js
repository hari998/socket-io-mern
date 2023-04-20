// import { Router as apiRouter } from "express/Router";
import express from "express";
const apiRouter = express.Router();
import { home } from "../controller/homeController.js";

apiRouter.route("/xyz").get(home);

export { apiRouter };
