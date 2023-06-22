import express, { urlencoded } from "express";
import "dotenv/config.js";
import routes from "./routes/routes.js";
import connectionDb from "./dbConnection/connectionDb.js";
import cors from "cors";
import postSeed from "./seed/postSeed.js";
import userSeed from "./seed/userSeed.js";
const app = express();
const port = process.env.SERVER_PORT;


//middleware de aplicacion
app.use(cors());
app.use(routes);
app.use(express.json());
//tengo que codificar las imagenes si o si
app.use(express.urlencoded({extended:true}))

await connectionDb
.sync({alter: false})
.then(()=>{
    app.listen(port, ()=>{
        console.log("server ok http://localhost:8080");
    })
})
.then(userSeed)
.then(postSeed)
