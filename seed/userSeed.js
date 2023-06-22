import { User } from "../Models/index.js";

const userSeed = async () => {
    try {
        if (await User.count() == 0) {
            await User.bulkCreate([{ userPassword: "a", userName: "a", userEmail: "a@a.com" }])
        }
    } catch (error) {
        console.log(error.message);
    }
}

export default userSeed;