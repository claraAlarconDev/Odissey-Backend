import express from "express";
import "dotenv/config.js";
import routes from "./routes/routes.js";
import connectionDb from "./dbConnection/connectionDb.js";
import cors from "cors";
import Post from "./Models/Post.js";
import User from "./Models/User.js";

const app = express();
app.use(cors());
app.use(routes);
const port = process.env.SERVER_PORT;

await connectionDb.sync({force: false}).then(()=>{
    app.listen(port, ()=>{
        console.log("server ok http://localhost:8080");
    })
})
