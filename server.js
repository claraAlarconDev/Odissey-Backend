import express, { urlencoded } from "express";
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

//middleware de aplicacion
app.use(express.json());
//tengo que codificar las imagenes si o si
app.use(express.urlencoded({extended:true}))

await connectionDb.sync({force: true}).then(()=>{
    app.listen(port, ()=>{
        console.log("server ok http://localhost:8080");
    })
})
