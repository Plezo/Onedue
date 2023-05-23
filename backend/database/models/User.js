const Sequelize = require('sequelize');
const db = require('../db');

const User = db.define('user', {
    user_id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
    },

    username: {
        type: Sequelize.STRING,
        allowNull: false
    },

    password_hash: {
        type: Sequelize.STRING,
        allowNull: false
    },

    email: {
        type: Sequelize.STRING,
        allowNull: false
    },

    profile_picture: {
        type: Sequelize.STRING,
        allowNull: true
    },
});

module.exports = User;