import { Sequelize } from "sequelize";

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER,process.env.DB_PASS ?? '', {
    host: process.env.DB_HOST,
    port: process.env.DB_HOSTPORT,
    dialect: 'mysql',
    define: {
        timestamps: true
    },
    pull: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
    operatorsAliases: true,
});

export default db;