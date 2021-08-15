// import all models
const Post = require('./Post');
const User = require('./User');
const Comment = require('./Comment');
const Issue = require('./Issue');

// create associations
User.hasMany(Post, {
  foreignKey: 'user_id',
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL',
});

User.hasMany(Issue, {
  foreignKey: 'user_id',
});

Issue.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL',
})

Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL',
});

Post.hasMany(Comment, {
  foreignKey: 'post_id',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL',
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'SET NULL',
});

module.exports = { User, Post, Comment };
