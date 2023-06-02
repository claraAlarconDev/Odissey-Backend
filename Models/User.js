import {DataTypes as Dt, Model} from "sequelize";
import connectionDb from "../dbConnection/connectionDb.js";

class User extends Model {};

User.init({
    userName:{
        type: Dt.STRING(30),
        allowNull: false,
        unique: true,
        validate:{
            notEmpty: true,
        },
        get(){
            const nombre = this.getDataValue('userName');
            return nombre ? nombre.toUpperCase() : null;
        },
        set(valor){
            this.setDataValue('userName', valor);
        }
    },
    userEmail:{
        type: Dt.STRING,
        allowNull: false,
        primaryKey: true,
        validate:{
            isEmail: true
        },
        get(){
            const email = this.getDataValue('userEmail');
            return email ? email : null;
        }, 
        set(valor){
            this.setDataValue('userEmail', valor)
        }
    }
}, {
    sequelize: connectionDb,
    modelName: 'User'
});

export default User;