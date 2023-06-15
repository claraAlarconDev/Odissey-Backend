import {Post} from "../Models/index.js";

const postSeed = async () =>{
    try {
        await Post.bulkCreate([{titulo: "Titulo1", descripcion: "descripcion1", parrafo: "parrafo1", userEmail:"user1@email.com" }]);
    } catch (error) {
        console.log(error.message);
    }
};

export default postSeed;