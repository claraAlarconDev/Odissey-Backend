import { Router } from "express";
import UserController from "../Controllers/UserController.js";

const userRoutes = Router();
const userController = new UserController();

userRoutes.get("/", userController.getAllUsers)

userRoutes.get("/:id", userController.getUserById)

userRoutes.post("/", userController.createUser);

userRoutes.post("/login", userController.login)

userRoutes.put("/:id", (req, res) => {
    res.send("update user by id")
})

userRoutes.delete("/:id", (req, res) => {
    res.send("delete user by id")
})

export default userRoutes;