import { Post } from "../Models/index.js";

const postSeed = async () => {
    try {
        if (await Post.count() == 0) {
            await Post.bulkCreate([{ titulo: "Titulo1", descripcion: "descripcion1", parrafo: "parrafo1", userEmail: "a@a.com" }]);
        }
    } catch (error) {
        console.log(error.message);
    }
};

export default postSeed;