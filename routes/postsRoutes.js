import {Router} from "express";
import Post  from "../Models/Post.js";

const postsRoutes = Router();

postsRoutes.get("/", (req, res)=>{
    res.send("get all posts")
})

postsRoutes.get("/:id", (req, res)=>{
    res.send("get post by id")
})

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