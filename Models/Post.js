import { DataTypes as Dt, Model } from "sequelize";
import connectionDb from "../dbConnection/connectionDb.js";

class Post extends Model { };

Post.init({
    titulo: {
        type: Dt.STRING(50),
        allowNull: false,
        validate: {
            notEmpty: true
        },
        get() {
            const titulo = this.getDataValue('titulo');
            return titulo ? titulo : null;
        },
        set(valor) {
            this.setDataValue('titulo', valor);
        }
    },
    descripcion: {
        type: Dt.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        },
        get() {
            const desc = this.getDataValue('descripcion');
            return desc ? desc : null;
        },
        set(valor) {
            this.setDataValue('descripcion', valor);
        }
    },
    parrafo: {
        type: Dt.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true
        },
        get() {
            const par = this.getDataValue('parrafo');
            return par ? par : null;
        },
        set(valor) {
            this.setDataValue('parrafo', valor);
        }
    },
    idUser:{
        type:Dt.INTEGER,
    } 
    //Faltaria la asociacion con user N:M posts
},
    {
        sequelize: connectionDb,
        modelName: 'Post',
        timestamps:false,
    });

export default Post;