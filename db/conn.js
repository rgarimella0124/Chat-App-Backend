const Sequelize = require("sequelize");
// const dotenv = require('dotenv');
// dotenv.config();
const conn = new Sequelize(
  "seconddb.cykw6tqn03sy.ap-south-1.rds.amazonaws.com",
  "postgresRam",
  "helloworld12",
  {
    dialect: "postgres"
  }
);

module.exports = conn;
