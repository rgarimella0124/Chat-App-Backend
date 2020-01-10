const Sequelize = require("sequelize");
// const dotenv = require('dotenv');
// dotenv.config();
var conn = new Sequelize(
  "postgres://postgresRam:helloworld12@seconddb.cykw6tqn03sy.ap-south-1.rds.amazonaws.com:5432",
  {
    retry: {
      match: [
        /ETIMEDOUT/,
        /EHOSTUNREACH/,
        /ECONNRESET/,
        /ECONNREFUSED/,
        /ETIMEDOUT/,
        /ESOCKETTIMEDOUT/,
        /EHOSTUNREACH/,
        /EPIPE/,
        /EAI_AGAIN/,
        /SequelizeConnectionError/,
        /SequelizeConnectionRefusedError/,
        /SequelizeHostNotFoundError/,
        /SequelizeHostNotReachableError/,
        /SequelizeInvalidConnectionError/,
        /SequelizeConnectionTimedOutError/
      ],
      max: 5
    }
  }
);

module.exports = conn;
