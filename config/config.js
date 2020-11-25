require("dotenv").config();
module.exports = {
  development: {
    url: process.env.ELEPHANT_SQL,
    dialect: "postgres",
    dialectOptions: {
      statement_timeout: 1000,
      idle_in_transaction_session_timeout: 5000,
    },
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
