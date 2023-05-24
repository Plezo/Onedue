const Sequelize = require('sequelize');
const db = require('../db');

const Todo = db.define('todo', {
    todo_id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
    },

    list_id: {
        type: Sequelize.UUID,
        allowNull: true
    },

    user_id: {
        type: Sequelize.UUID,
        allowNull: false
    },

    name: {
        type: Sequelize.STRING,
        allowNull: false
    },

    description: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: ""
    },

    due_date: {
        type: Sequelize.DATE,
        allowNull: true
    },

    completed: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
});

module.exports = Todo;