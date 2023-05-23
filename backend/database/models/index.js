const User = require('./User');
const List = require('./List');
const Todo = require('./Todo');

List.belongsTo(User);
Todo.belongsTo(List);
Todo.belongsTo(User);

User.hasMany(Todo);
User.hasMany(List);
List.hasMany(Todo);

module.exports = {
    User,
    List,
    Todo
}
