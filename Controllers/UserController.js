import { User } from "../Models/index.js";
class UserController {
    constructor() {

    };
    getAllUsers = async (req, res, next) => {
        try {
            const result = await User.findAll({
                attributes: ["userPassword", "userName", "userEmail"]
            });
            if (result.length === 0) throw new Error("No se encontraron usuarios");
            res
                .send({ succes: true, message: "usuarios encontrados", result });
        } catch (error) {
            res.status(400).send({ success: false, result: error.message });
        }
    };
    getUserById = async (req, res, next) => {
        console.log("req: " + req);

        try {
            const { id } = req.params
            const result = await User.findOne({
                where: {
                    id: id,
                },
                attributes: ["userPassword", "userName", "userEmail"]

            });
            console.log(result);
            res.send({ success: true, message: "usuario encontrado", result })
        } catch (error) {
            res.status(400).send({ success: false, result: error.message })
        }
    };
    createUser = async (req, res, next) => {
        try {
            const { userPassword, userName, userEmail } = req.body;
            const result = await User.create({ userPassword, userName, userEmail });
            if (!result.dataValues) throw new Error("No se pudo crear el usuario");
            res
                .status(200)
                .send({ success: true, message: "Usuario creado con exito", result });
        } catch (error) {
            res.status(400).send({ success: false, result: error.message });
        }
    };
    login = async (req, res, next) => {

        try {
            const { userPassword, userEmail } = req.body;
            const found = await User.findByPk(userEmail);

            if (found === null) throw new Error("Email no registrado")
            if (found.userPassword != userPassword) throw new Error("Contraseña incorrecta")
            res.status(200).send({ succes: true, message: "Si es un usuario" })
        } catch (error) {
            res.status(400).send({ succes: false, message: error.message });
        }
    }
}

export default UserController;