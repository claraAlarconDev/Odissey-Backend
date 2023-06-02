import {Router} from "express";
import User from "../Models/User.js";

const userRoutes = Router();

userRoutes.get("/", (req, res)=>{
    res.send("get all users");
})

userRoutes.get("/:id", (req, res)=>{
    res.send("get user by id");
})

userRoutes.post("/", (req, res)=>{
    res.send("crear user");
})

userRoutes.post("/login/", (req, res)=>{
    res.send("loguearse")
})

userRoutes.put("/:id", (req, res)=>{
    res.send("update user by id")
})

userRoutes.delete("/:id", (req, res)=>{
    res.send("delete user by id")
})

export default userRoutes;