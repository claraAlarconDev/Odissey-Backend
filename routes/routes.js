import {Router} from "express";
import postsRoutes from "./postsRoutes.js";
const routes = Router();

routes.use("/post", postsRoutes);

export default routes;