import Post from "./Post.js";
import User from "./User.js";

User.hasMany(Post, {
    foreignKey:"userEmail"
});
Post.belongsTo(User, {
    foreignKey:"userEmail"
});

export{Post, User};
