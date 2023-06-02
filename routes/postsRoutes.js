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



export default postsRoutes;