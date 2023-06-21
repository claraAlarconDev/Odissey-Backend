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
            const result = await Post.findOne({
                where:{
                   id:id,
                },
                attributes:["id", "titulo", "descripcion", "parrafo"]
                
            });
            console.log(result);
            res.send({ success: true, message: "post encontrado", result })
        } catch (error) {
            res.status(400).send({success: false, result: error.message})
        }
    };
    createPost = async (req, res, next) => {
        try {
            const {titulo, descripcion, parrafo, userEmail} = req.body;
            const result = await Post.create({titulo, descripcion, parrafo, userEmail});

            if(!result.dataValues) throw new Error("No se pudo crear el post");
            res
            .status(200)
            .send({success: true, message: "Post creado con exito", result})
        } catch (error) {
            res.status(400).send({ success: false, result: error.message });
        }
    };
    deletePostById = async (req, res, next) =>{
        try {
            const {id} = req.params;
            console.log("id: "+ id);
            const result = await Post.destroy({
                where: {
                    id: id
                }
            })
            if(!result.dataValues) throw new Error("No se pudo eliminar el post")
            res.status.send({success: true, message: "Post eliminado", result});
        } catch (error) {
            res.status(400).send({ success: false, result: error.message });
        }
    };
    updatePostById = async (req,res, next) =>{
        try {
            const {id} = req.params;
            //const {titulo} = req.params.titulo;
            const result = await Post.update({
                where:{
                    id:id
                }
            })
            if(!result.dataValues) throw new Error("No se pudo actualizar el post")
            res.status(200).send({succes: true, message: "Se pudo actualizar el post"})
        } catch (error) {
            res.status(400).send({ success: false, result: error.message });
        }
    }

}

export default PostController;