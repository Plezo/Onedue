// TODO: Change this to .env
require('dotenv').config();

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPwd = process.env.DB_PWD;

module.exports = {
    dbName,
    dbUser,
    dbPwd
};