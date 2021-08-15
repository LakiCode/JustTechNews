const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Issue model
class Issue extends Model {}

// create fields/columns for Post model
Issue.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    issue: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    issue_comment: {
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
    modelName: 'issue',
  }
);

module.exports = Issue;