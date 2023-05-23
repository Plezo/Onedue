const Sequelize = require('sequelize');
const db = require('../db');

const List = db.define('list', {
    list_id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
    },

    user_id: {
        type: Sequelize.UUID,
        allowNull: false
    },

    list_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
});

module.exports = List;