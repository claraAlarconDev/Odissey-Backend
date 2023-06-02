import {Router} from "express";
import postsRoutes from "./postsRoutes.js";
import userRoutes from "./userRoutes.js";

const routes = Router();

routes.use("/post", postsRoutes);
routes.use("/user", userRoutes);

export default routes;