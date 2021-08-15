const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Post model
class Post extends Model {}

// create fields/columns for Post model
Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    review: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    car_img: {
      type: DataTypes.STRING,
    },
    type: {
      type: DataTypes.STRING,
    },
    data: {
      type: DataTypes.BLOB('long'),
    },
    car_maker: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    car_model: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    car_body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
  }
);

module.exports = Post;
