import {Sequelize} from "sequelize";

const db = new Sequelize ('notes_db','root','',{
    host : '34.71.170.158',
    dialect : 'mysql'
});

export default db;
