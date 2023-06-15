import {User} from "../Models/index.js";

const userSeed = async () => {
    try {
        await User.bulkCreate([{userPassword: "13", userName: "usuario1", userEmail:"user1@email.com"}])
    } catch (error) {
        console.log(error.message);
    }
}

export default userSeed;