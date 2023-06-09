import {Router} from "express";
import PostController from "../Controllers/PostController.js"

const postsRoutes = Router();
const postController = new PostController();

postsRoutes.get("/", postController.getAllPost)

postsRoutes.get("/:id", postController.getPostById)

postsRoutes.post("/", (req, res)=>{
    res.send("crear post");
})

postsRoutes.put("/:id", (req, res)=>{
    res.send("update post by id")
})

postsRoutes.delete("/:id", (req, res)=>{
    res.send("delete post by id")
})

export default postsRoutes;