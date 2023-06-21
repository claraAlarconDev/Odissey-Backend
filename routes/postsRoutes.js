import {Router} from "express";
import PostController from "../Controllers/PostController.js"

const postsRoutes = Router();
const postController = new PostController();

postsRoutes.get("/", postController.getAllPost)

postsRoutes.get("/:id", postController.getPostById)

postsRoutes.post("/", postController.createPost)

postsRoutes.put("/:id", postController.updatePostById)

postsRoutes.delete("/:id", postController.deletePostById)

export default postsRoutes;