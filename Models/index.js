import Post from "./Post.js";
import User from "./User.js";

User.hasMany(Post, {
    foreignKey:"idUser"
});
Post.belongsTo(User, {
    foreignKey: "idUser"
});

export{Post, User};
