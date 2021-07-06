require('dotenv').config();

module.exports = {
  "development": {
    "username": "root",
    "password": null,
    "database": "stickerwizard",
    "port": 3306,
    "host": "127.0.0.1",
    "dialect": "mysql",
    "define": {
      "paranoid": true
    }
    // "operatorsAliases": false
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  }
}
