import sequelize from "sequelize";
import Post from "./Post.js";
import User from "./User.js";

User.hasMany(Post);
Post.belongsTo(User, {});

