import {Post} from "../Models/index.js"

class PostController{
    constructor(){

    };
    getAllPost = async(req, res, next)=>{
        try {
            const result = await Post.findAll({
                attributes:["id", "titulo", "descripcion", "parrafo"]
            });
            if(result.length === 0) throw new Error("No se encontraron post")
            res
            .send({succes: true, message: "posts encontrados", result});
        } catch (error) {
            res.status(400).send({ success: false, result: error.message });
        }
    };
    getPostById = async(req, res, next)=>{
        console.log("req: " + req);
        try {
            const {id} = req.params
            const result = await Post.findAll({
                where:{
                   id:id,
                },
                attributes:["id", "titulo", "descripcion", "parrafo"]
                
            });
            console.log(result);
            res.send({success:true, message: "post encontrado", result})
        } catch (error) {
            res.status(400).send({success: false, result: error.message})
        }
    }
}

export default PostController;